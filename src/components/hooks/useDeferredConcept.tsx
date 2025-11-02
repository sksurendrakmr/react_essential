import { useDeferredValue, useState } from "react";

export const DeferredConcept = () => {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  // const startTime = performance.now();
  // while (performance.now() - startTime < 300) {}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      {[...new Array(1000)].map((item, index) => (
        <li key={index}>{deferredText}</li>
      ))}
    </>
  );
};
