"use client";

import { MODAL_TYPES, useModalsStore } from "@/stores/modals";
import { createPortal } from "react-dom";
import GalleryModal from "./GalleryModal";
import { Dialog, DialogContent, DialogHeader } from "../shadcn/dialog";

const Modals = () => {
  const { activeModal, hideModal } = useModalsStore((state) => ({
    activeModal: state.activeModal,
    hideModal: state.hideModal,
  }));

  const handleOpenChange = (isOpened: boolean) =>
    !isOpened && setTimeout(hideModal, 1000);

  if (typeof window === "undefined") return <></>;

  if (!activeModal) return <></>;

  let modal;
  switch (activeModal.type) {
    case MODAL_TYPES.GALLERY:
      modal = (
        <GalleryModal
          slides={activeModal.initialProps.slides}
          activeSlide={activeModal.initialProps.activeSlide}
        />
      );
      break;
  }

  return (
    <>
      {createPortal(
        <Dialog defaultOpen={true} onOpenChange={handleOpenChange}>
          <DialogHeader />
          <DialogContent className="h-5/6 w-full max-w-80 max-h-44 bg-gradient-to-br from-indigo-300/50 to-blue-300/50 p-2 md:max-h-80 md:max-w-xl lg:max-h-[36rem] lg:max-w-5xl xl:max-h-[45rem] xl:max-w-7xl">
            {modal}
          </DialogContent>
        </Dialog>,
        window.document.body
      )}
    </>
  );
};

export default Modals;
