import { FC } from "react";
import Gallery, { type Props as GalleryProps } from "@/components/Gallery";

type Props = {
  slides: GalleryProps["slides"];
  activeSlide: number;
};

const GalleryModal: FC<Props> = ({ slides, activeSlide }) => {
  return <Gallery slides={slides} initialSlide={activeSlide} className="w-full h-full" />;
};

export default GalleryModal;
