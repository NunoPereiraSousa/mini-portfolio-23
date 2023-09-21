import Figure from "../Figure";
import { PrismicLink, PrismicRichText } from "@prismicio/react";

export default function Project({ url, name, image, mystery }) {
  return (
    <PrismicLink
      className={mystery === true ? "project reversed" : "project"}
      href={url}
      target="_blank"
    >
      <div className="project_name">
        <PrismicRichText field={name} />
      </div>
      <Figure
        figureClassName={"project_figure"}
        imageClassName={"project_image"}
        url={image.url}
        alt={image.alt}
        revealFrom={"left"}
        speed={0.75}
      />
    </PrismicLink>
  );
}
