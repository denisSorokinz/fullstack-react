import { useOptimistic, useTransition } from "react";

type WithId<T> = T & { id: number };

const updateEntry = <T extends { id: number }>(
  state: Array<T>,
  nextEntry: WithId<Partial<T>>
) => {
  const existingIdx = state.findIndex((item) => item.id === nextEntry.id);

  if (existingIdx === -1) return state;

  const nextState = [...state];
  const entryCopy = { ...nextState[existingIdx] };
  nextState[existingIdx] = { ...entryCopy, ...nextEntry };

  return nextState;
};

const useEditableList = <T extends { id: number }>(
  list: Array<T>,
  onUpdate: (nextEntry: WithId<Partial<T>>) => Promise<boolean>
) => {
  const [isPending, startTransition] = useTransition();

  const [uiList, updateUIEntry] = useOptimistic(
    list,
    (currentState, optimisticValue: WithId<Partial<T>>) => {
      const nextState = updateEntry(currentState, optimisticValue);

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

  return { uiList, updateListEntry };
};

export default useEditableList;
