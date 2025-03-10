import { useQuery } from '@tanstack/react-query';

import { postConcertFilterAPI } from '@/app/_shared/services/main.api';
import concertListKey from '@/app/_shared/services/main.key';
import { PostConcertFilterAPIBody } from '@/app/_shared/services/main.type';

const useConcertFilterQuery = (filter?: PostConcertFilterAPIBody) => {
  const { data, isLoading, error } = useQuery({
    queryKey: concertListKey.concertFilter(filter || {}),
    queryFn: () => postConcertFilterAPI(filter || {}),
  });

  return { data, isLoading, error };
};

export { useConcertFilterQuery };
