import {
  PostConcertFilterAPIBody,
  PostConcertFilterAPIResponse,
} from '@/app/_shared/services/main.type';
import instance from '@/shared/services/instance';

/**
 * 공연 정보 조회(필터) API
 */
const postConcertFilterAPI = (
  data: PostConcertFilterAPIBody,
): Promise<PostConcertFilterAPIResponse> => {
  return instance(`/concert/filtered`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export { postConcertFilterAPI };
