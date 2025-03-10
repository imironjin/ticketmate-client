import Image from 'next/image';
import Link from 'next/link';

import { ConcertListItem } from '@/app/_shared/services/main.type';
import dateUtil from '@/shared/utils/date';

import styles from './concert-card.module.scss';

interface ConcertCardProps {
  concertItem: ConcertListItem;
}

const ConcertCard = ({ concertItem }: ConcertCardProps) => {
  const { calcStringToFormat, calcDDay } = dateUtil;

  const example = {
    exampleDate1: '2025-04-10T00:00:00',
    exampleDate2: '2025-02-01T00:00:00',
  };

  const formattedDate = `${calcStringToFormat(example.exampleDate1, 'YYYY.MM.DD')} ~ ${calcStringToFormat(example.exampleDate2, 'YYYY.MM.DD')}`;
  const dDay = calcDDay(example.exampleDate1);

  return (
    <Link href={`/concert/${concertItem.concertName}`}>
      <div className={styles.container}>
        <div className={styles.concert_img}>
          <Image
            src={concertItem.concertThumbnailUrl}
            alt={concertItem.concertName}
            width={104}
            height={139}
          />
        </div>
        <div className={styles.concert_info}>
          <div className={styles.description}>
            <span className={styles.date}>{formattedDate}</span>
            <span className={styles.title}>{concertItem.concertName}</span>
          </div>
          <div className={styles.agent}>
            <span className={styles.agent_label}>티켓팅까지</span>
            <span className={styles.agent_count}>D-{dDay}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ConcertCard;
