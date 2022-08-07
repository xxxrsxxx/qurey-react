import React, { FC, memo } from "react";

interface Props {
  data: {
    arrayDummy: [];
  };
  postHandler: (event: React.MouseEvent) => void;
}

const Fetch: FC<Props> = ({ data, postHandler }) => {
  console.log("Fetch", data);
  return (
    <div>
      <h2>Fetch Component</h2>
      <div>{data.arrayDummy}</div>
      <button onClick={postHandler}>fetch</button>
    </div>
  );
};

export default memo(Fetch);
