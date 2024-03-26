import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

const useData = (endPoint, customConfig, deps) => {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      apiClient
        .get(endPoint, customConfig)
        .then((res) => {
          if (
            endPoint == "/products" &&
            data &&
            data.products &&
            customConfig.params.page != 1
          ) {
            setData((prev) => ({
              ...prev,
              products: [...prev.products, ...res.data.products],
            }));
          } else {
            setData(res.data);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message), setIsLoading(false);
        });
    },
    deps ? deps : []
  );

  return { data, error, isLoading };
};

export default useData;
