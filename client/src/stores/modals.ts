import { create } from "zustand";
import { type Props as GalleryProps } from "@/components/Gallery"

export enum MODAL_TYPES {
  "GALLERY",
  "OTHER"
}

type State = {
  activeModal:
    | {
        type: MODAL_TYPES.GALLERY;
        initialProps: {
          activeSlide: number;
          slides: GalleryProps['slides']
        };
      }
    | {
        type: Omit<MODAL_TYPES, MODAL_TYPES.GALLERY>;
        initialProps: {
          [key: string]: any;
        };
      }
    | null;
};

type Actions = {
  openModal: (nextActiveModal: State['activeModal']) => void;
  hideModal: () => void;
};

const useModalsStore = create<State & Actions>()((set) => ({
  activeModal: null,
  openModal: (nextActiveModal) =>
    set(() => ({ activeModal: nextActiveModal })),
  hideModal: () => set(() => ({ activeModal: null })),
}));

export { useModalsStore };
