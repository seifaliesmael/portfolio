import { useState } from "react";

interface Props {
    id: number;
    onButtonClick?: (id: number) => void;
}

const MyCountButton = ({id, onButtonClick} : Props) => {
  const [count, updateCount] = useState(0);

  let increment = (curr: number) => curr + 1

  return (
    <button type="button" className="btn btn-primary"
    onClick={() => {
      onButtonClick?.(id);
      updateCount(increment);
    }}
    > {count} </button>
  )
}

export default MyCountButton