import { Children, cloneElement, useEffect, useRef, useState } from "react";

const Accordion = ({
  children,
  defaultIndex = 0,
  onChange = () => {},
  collapseOthers = true,
  className = "",
}) => {
  const items = Children.toArray(children);
  const [openIndex, setOpenIndex] = useState([defaultIndex]);
  const refs = useRef([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, items.length);
  }, [items.length]);

  const toggle = (index) => {
    const isOpen = openIndex.includes(index);
    if (collapseOthers) {
      if (isOpen) {
        setOpenIndex([]);
        onChange(undefined);
      } else {
        setOpenIndex([index]);
        onChange(index);
      }
    } else {
      const next = isOpen
        ? openIndex.filter((i) => i !== index)
        : [...openIndex, index];

      setOpenIndex(next);
      if (!isOpen) onChange(index);
    }
  };

  const handleKey = (e, index) => {
    const last = items.length - 1;
    let next;

    if (["ArrowDown", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      next = index === last ? 0 : index + 1;
      refs.current[next]?.focus();
    } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      e.preventDefault();
      next = index === 0 ? last : index - 1;
      refs.current[next]?.focus();
    } else if (["Enter", " "].includes(e.key)) {
      e.preventDefault();
      toggle(index);
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) =>
        cloneElement(item, {
          isOpen: openIndex.includes(index),
          onToggle: () => toggle(index),
          onKeyDown: (e) => handleKey(e, index),
          buttonRef: (el) => (refs.current[index] = el),
        })
      )}
    </div>
  );
};

export default Accordion;
