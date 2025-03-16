import axiosInstance from "@/http/axiosBase";
import { useState, useCallback } from "react";

export default function useService() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(
    async (url, method = "GET", body = null, headers, onSuccess, onError) => {
      setLoading(true);
      try {
        const response = await axiosInstance({
          url,
          method,
          data: body,
          responseType: url.includes("export") && "blob", // The body object is automatically handled by axios
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            ...headers,
          },
        });
        setData(response.data);
        setError(null);
        onSuccess && onSuccess(response.data); // Call onSuccess callback with response data
      } catch (err) {
        console.error(err);
        setError(err);
        setData(null);
        onError && onError(err); // Call onError callback with error
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const mutate = useCallback(
    (url, method = "GET", body = null, headers = {}, onSuccess, onError) => {
      fetchData(url, method, body, headers, onSuccess, onError);
    },
    [fetchData]
  );

  return { data, loading, error, mutate };
}
