'use client';

import React from 'react';

import ConcertCard from '@/app/_components/concert/concert-card/concert-card';
import { useConcertFilterQuery } from '@/app/_shared/services/main.query';

import styles from './concert-list.module.scss';

const ConcertList = () => {
  const { data, isLoading, error } = useConcertFilterQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <>
      <div className={styles.container}>
        {/* 리스트 */}
        <div className={styles.concert_container}>
          <span className={styles.title}>신청가능 공연</span>

          {data &&
            data.content.map((concertItem) => (
              <ConcertCard
                key={concertItem.concertName}
                concertItem={concertItem}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default ConcertList;
