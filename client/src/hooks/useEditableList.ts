import { useOptimistic, useTransition } from "react";

type WithId<T> = T & { id: number };

const useEditableList = <T extends { id: number }>(
  list: Array<T>,
  onUpdate: (nextEntry: WithId<Partial<T>>) => Promise<boolean>,
  onDelete: (entryId: number) => Promise<boolean>,
  replaceStateEntry: (state: T[], nextValue: WithId<Partial<T>>) => T[]
) => {
  const [isPending, startTransition] = useTransition();

  const [uiList, updateUIEntry] = useOptimistic(
    list,
    (currentState, optimisticValue: WithId<Partial<T>>) => {
      const nextState = replaceStateEntry(currentState, optimisticValue);

      return nextState;
    }
  );

  const updateListEntry = (nextEntry: WithId<Partial<T>>) => {
    const old = Object.assign(
      {},
      uiList.find((item) => item.id === nextEntry.id)
    );
    const rollback = () => startTransition(() => updateUIEntry(old));

    startTransition(() => {
      updateUIEntry(nextEntry);

      onUpdate(nextEntry).then((success) => !success && rollback()); // actual state updated here
    });
  };

  return { uiList, updateListEntry, transitionPending: isPending };
};

export default useEditableList;
