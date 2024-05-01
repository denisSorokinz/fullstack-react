import { useOptimistic, useTransition } from "react";
import toast from "react-hot-toast";

type WithId<T> = T & { id: number };
type UpdateAction<T> =
  | {
      action: "update";
      payload: WithId<Partial<T>>;
    }
  | {
      action: "add";
      payload: WithId<T>;
    }
  | { action: "delete"; payload: { id: number } };

const useEditableList = <T extends { id: number }>(
  list: Array<T>,
  onUpdate: (nextEntry: WithId<Partial<T>>) => Promise<boolean>,
  onDelete: (entryId: number) => Promise<boolean>,
  replaceStateEntry: (state: T[], nextValue: WithId<Partial<T>>) => T[]
) => {
  const [isPending, startTransition] = useTransition();

  const [uiList, updateUIEntry] = useOptimistic<WithId<T>[], UpdateAction<T>>(
    list,
    (currentState, { action, payload }) => {
      let nextState = { ...currentState };

      if (action === "update") {
        console.log("action-update");

        nextState = replaceStateEntry(currentState, payload);
      }
      if (action === "add") {
        console.log("action-add");
        if (!currentState.find((entry) => entry.id === payload.id))
          nextState.push(payload);
      }
      if (action === "delete") {
        nextState = currentState.filter((entry) => entry.id !== payload.id);
        console.log("action-delete", {
          currentState: { ...currentState },
          nextState: { ...nextState },
        });
      }

      return nextState;
    }
  );

  const updateListEntry = (nextEntry: WithId<Partial<T>>) => {
    const old = Object.assign(
      {},
      uiList.find((item) => item.id === nextEntry.id)
    );
    const rollback = () =>
      startTransition(() => updateUIEntry({ action: "update", payload: old }));

    startTransition(() => {
      updateUIEntry({ action: "update", payload: nextEntry });

      onUpdate(nextEntry).then((success) => {
        if (!success) {
          rollback();
          return;
        }
      });
    });
  };

  const deleteListEntry = (id: number) => {
    console.log("delete id:", { id });

    const old = Object.assign(
      {},
      uiList.find((item) => item.id === id)
    );
    const rollback = () =>
      startTransition(() => updateUIEntry({ action: "add", payload: old }));

    startTransition(() => {
      updateUIEntry({ action: "delete", payload: { id } });

      onDelete(id).then((success) => {
        if (!success) {
          rollback();
          return;
        }

        toast.success("Deleted successfully");
      });
    });
  };

  return {
    uiList,
    updateListEntry,
    transitionPending: isPending,
    deleteListEntry,
  };
};

export default useEditableList;
