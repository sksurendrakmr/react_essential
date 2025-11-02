import { useState, useTransition } from "react";

export const TransitionConcept = () => {
  const [list, setList] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [isPending, setTransition] = useTransition();

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    setTransition(() => {
      setList([...new Array(1000)]);
    });
  };

  return (
    <>
      <input type="text" onChange={handleClick} value={search} />
      {/* {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))} */}
    </>
  );
};
