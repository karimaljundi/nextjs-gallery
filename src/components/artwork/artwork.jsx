import React from 'react'
import styles from './artwork.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function artwork({artwork}) {
  return (
    <div className={styles.container}>
          <div className={styles.top}>
            {artwork.Poster && <div className={styles.imgContainer}>
            <Image src='/public/test.jpeg' alt={artwork.Title} width={300} height={300} />
          </div>}
</div>
<div className={styles.bottom}>
<Link className={styles.title} href={`/artworks/${artwork.id}`}>{artwork.title}</Link>
</div>
    </div>
  )
}
