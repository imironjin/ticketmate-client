import dayjs from 'dayjs';

export const DateType = {
  YYYYMMDDTHHmmss: 'YYYY-MM-DDTHH:mm:ss',
} as const;

export const DateToStringType = {
  YYYYMMDD: 'YYYY.MM.DD',
} as const;

type DateFormatType = (typeof DateType)[keyof typeof DateType];

type StringFormatType =
  (typeof DateToStringType)[keyof typeof DateToStringType];

const dateUtil = {
  /**
   * 날짜를 문자열로 변환
   * @param date 날짜 입력 (dayjs.ConfigType)
   * @param format 사용할 포맷
   * @returns 포맷에 맞춘 문자열
   */
  calcDateToString: (
    date: dayjs.ConfigType,
    format: DateFormatType,
  ): string => {
    return dayjs(date).format(format);
  },

  /**
   * 'YYYY-MM-DDTHH:mm:ss' 형식의 문자열을 원하는 포맷의 문자열로 변환
   * @param date 입력 날짜 문자열 (예: "2025-03-09T12:34:56")
   * @param format 출력 포맷 (예: 'YYYY.MM.DD')
   * @returns 변환된 문자열 (예: "2025.03.09")
   */
  calcStringToFormat: (date: string, format: StringFormatType): string => {
    return dayjs(date, DateType.YYYYMMDDTHHmmss).format(format);
  },

  /**
   * D-Day를 계산 (현재 날짜와의 차이)
   * @param date 입력 날짜 문자열 ('YYYY-MM-DDTHH:mm:ss' 형식)
   * @returns 남은 일 수 (양수: 남은 날, 음수: 지난 날, 0: 오늘)
   */
  calcDDay: (date: string): number => {
    const targetDate = dayjs(date, DateType.YYYYMMDDTHHmmss);
    const now = dayjs();

    // 유효성 체크
    if (!targetDate.isValid()) {
      throw new Error(
        `날짜 형식이 잘못되었습니다. As-Is: ${date} To-Be: YYYY-MM-DDTHH:mm:ss`,
      );
    }

    return targetDate.diff(now, 'day');
  },
};

export default dateUtil;
