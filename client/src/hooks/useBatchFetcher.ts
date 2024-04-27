import { sleepMs } from "@/lib/utils";
import { useCallback, useEffect, useState, useTransition } from "react";

const useBatchFetcher = <T>(
  endpoints: string[],
  batchSize = 3,
  delay = 500
): [boolean, T[]] => {
  const [transition, startTransition] = useTransition();
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let nextData: T[] = [];

    const controller = new AbortController();
    const signal = controller.signal;
    let pendingRequests = [];

    const fetcher = async () => {
      const urlBatches: string[][] = [];
      const batchCount = Math.ceil(endpoints.length / batchSize);
      for (let nBatch = 0; nBatch < batchCount; nBatch++) {
        urlBatches[nBatch] = endpoints.slice(
          batchSize * nBatch,
          batchSize * nBatch + batchSize
        );
      }

      setLoading(true);
      for (let batch of urlBatches) {
        const requests = batch.map((url) => fetch(url, { signal }));
        pendingRequests.push(...requests);

        const responses = await Promise.all(requests);
        const data = await Promise.all<T>(responses.map((res) => res.json()));

        nextData = nextData.concat(data);
        pendingRequests = [];

        await sleepMs(delay);
      }
      startTransition(() => setData(nextData));
      setLoading(false);
    };

    fetcher();

    return () => controller.abort("useBatchFetcher unmount");
  }, [endpoints]);

  return [loading, data];
};

export default useBatchFetcher;
