import { Pagination } from '@/shared/types/list-api';

interface ConcertListItem {
  concertName: string;
  concertHallName: string;
  concertType: string;
  ticketPreOpenDate: string | null;
  ticketOpenDate: string;
  duration: number;
  session: number;
  concertThumbnailUrl: string;
  ticketReservationSite: string;
}

interface PostConcertFilterAPIResponse extends Pagination {
  content: ConcertListItem[];
}

interface PostConcertFilterAPIBody {
  concertName?: string; // 공연 제목 검색어 [선택]
  concertHallName?: string; // 공연장 이름 검색어 [선택]
  concertType?: string; // 공연 카테고리 [선택]
  ticketPreOpenStartDate?: string; // 선예매 오픈일 시작 범위 [선택]
  ticketPreOpenEndDate?: string; // 선예매 오픈일 종료 범위 [선택]
  ticketOpenStartDate?: string; // 티켓 예매 오픈일 시작 범위 [선택]
  ticketOpenEndDate?: string; // 티켓 예매 오픈일 종료 범위 [선택]
  session?: number; // 회차 [선택]
  ticketReservationSite?: string; // 예매처 사이트 [선택]
  pageNumber?: number; // 요청 페이지 번호 [선택]
  pageSize?: number; // 한 페이지 당 항목 수 [선택]
  sortField?: string; // 정렬할 필드 [선택]
  sortDirection?: string; // 정렬 방향 [선택]
}

export type {
  ConcertListItem,
  PostConcertFilterAPIResponse,
  PostConcertFilterAPIBody,
};
