import { PostConcertFilterAPIBody } from '@/app/_shared/services/main.type';

const concertListKey = {
  concertFilter: (filter: PostConcertFilterAPIBody) => [
    '/concert/filtered',
    filter,
  ],
};

export default concertListKey;
