import React, { useState, useCallback } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { $_get, $_patch } from "../../utils/api";
import Fetch from "../../components/Fetch";

interface Dummy {
  key: string;
  arrayDummy: [];
  list: [];
}

const Main = () => {
  const [dummy, setDummy] = useState<Dummy | {}>({});

  const queryClient = useQueryClient();

  const mutations = () => {
    const patch = useMutation((arg: number) => $_patch("patch", { num: arg }), {
      onSuccess: (res) => {
        // 쿼리 무효화
        queryClient.invalidateQueries(["mock"]);
      },
    });

    return { patch };
  };
  const mutation = mutations();

  const { data, isFetching, isLoading } = useQuery(
    ["mock"],
    () => $_get("mock", {}),
    {}
  );

  const postHandler = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    mutation.patch.mutate(1);
  }, []);

  const FetchProps = {
    data,
    postHandler,
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (isFetching) return <h1>isFetching...</h1>;
  return (
    <>
      <h1>Main</h1>
      <Fetch {...FetchProps} />
    </>
  );
};

export default Main;
