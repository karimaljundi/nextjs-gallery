import React from 'react'
import styles from './artwork.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function artwork({artwork}) {
  return (
    <div className={styles.container}>
          <div className={styles.top}>
            {artwork.Poster && <div className={styles.imgContainer}>
            <img src={artwork.Poster} alt={artwork.Title} width={300} height={300} key={artwork._id} />
          </div>}
</div>
<div className={styles.bottom}>
<Link className={styles.Title} href={`/artworks/${artwork._id}`}>{artwork.Title}</Link>
</div>
    </div>
  )
}
