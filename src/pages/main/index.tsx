import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { $_get, $_patch } from "../../utils/api";
import Fetch from "../../components/Fetch";

const Main = () => {
  const queryClient = useQueryClient();
  const { data, status, isFetching } = useQuery(
    ["mock"],
    () => $_get("mock", {}),
    {}
  );
  const mutation = useMutation(
    (arg: number) => $_patch("patch", { num: arg }),
    {
      onSuccess: (res) => {
        console.log("mutation", res);
        // 쿼리 무효화
        queryClient.invalidateQueries(["mock"]);
      },
    }
  );
  const postHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    mutation.mutate(1);
  };
  console.log("status", status, "isFetching", isFetching);
  if (status === "loading") return <h1>Loading...</h1>;
  if (isFetching) return <h1>isFetching...</h1>;
  return (
    <>
      <h1>Main</h1>
      <button onClick={postHandler}>button</button>
      <div>{data?.arrayDummy}</div>
      <Fetch />
    </>
  );
};

export default Main;
