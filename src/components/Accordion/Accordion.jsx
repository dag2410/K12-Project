import React, { Children, cloneElement, useRef, useState } from "react";

export function Accordion({
  children,
  defaultIndex = 0,
  onChange = () => {},
  collapseOthers = true,
  className = "",
}) {
  const items = Children.toArray(children);
  const [openIndex, setOpenIndex] = useState([defaultIndex]);

  const toggle = (index) => {
    const isOpen = openIndex.includes(index);

    if (collapseOthers) {
      if (!isOpen) {
        setOpenIndex([index]);
        onChange(index);
      }
    } else {
      const next = isOpen
        ? openIndex.filter((i) => i !== index)
        : [...openIndex, index];

      if (!isOpen) onChange(index);
      setOpenIndex(next);
    }
  };

  const handleKey = (e, index) => {
    const last = items.length - 1;
    let next;

    if (["ArrowDown", "ArrowRight"].includes(e.key)) {
      next = index === last ? 0 : index + 1;
    } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      next = index === 0 ? last : index - 1;
    } else if (["Enter", " "].includes(e.key)) {
      e.preventDefault();
      toggle(index);
      return;
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) =>
        cloneElement(item, {
          isOpen: openIndex.includes(index),
          onToggle: () => toggle(index),
          onKeyDown: (e) => handleKey(e, index),
        })
      )}
    </div>
  );
}
