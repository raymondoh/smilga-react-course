import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard");
      } catch (error) {
        toast.error("failed to copy to clipboard");
      }
    } else {
      toast.error("clipboard not avaialble");
      console.log("shit");
    }
  };
  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}>
      <p className="percent-value">{weight}%</p>
      <p className="hex-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
