import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { $_get, $_patch } from "../../utils/api";

const Main = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery(["mock"], () => $_get("mock", {}), {
    suspense: true,
  });
  const mutation = useMutation(
    (arg: number) => $_patch("patch", { num: arg }),
    {
      onSuccess: () => {
        // 쿼리 무효화
        queryClient.invalidateQueries(["mock"]);
      },
    }
  );

  const postHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    mutation.mutate(1);
  };

  return (
    <>
      <p>main {data.arrayDummy}</p>
      <button onClick={postHandler}>button</button>
    </>
  );
};

export default Main;
