import React, { useRef } from 'react';

import Button from './Button';

import ProfileImage from '../assets/image-profile-mobile.webp';
import ProfileTabletImage from '../assets/image-profile-tablet.webp';
import ProfileDesktopImage from '../assets/image-profile-desktop.webp';
import CircleImage from '../assets/pattern-circle.svg';
import RingsImage from '../assets/pattern-rings.svg';

import styles from '../styles/KV.module.scss';

const KV = ({ scrollRef, onScroll }) => {
	return (
		<section className={`${styles.kv} ${styles.container}`}>
			{/* <img className={styles.rings} src={RingsImage} alt="rings" />
			<div className={styles.image}>
				<picture>
					<source srcSet={ProfileDesktopImage} media="(min-width: 62em)" />
					<source srcSet={ProfileTabletImage} media="(min-width: 48em)" />
					<img
						className={styles['profile-image']}
						src={ProfileImage}
						alt="Profile Image"
					/>
				</picture>
				<img className={styles.circle} src={CircleImage} alt="circle" />
			</div> */}
			<div className={styles.text}>
				<h2>
					<span className={styles.nice}>Nice to</span> meet you! I’m{' '}
					<span className={styles.name}>Kishin Kajihara</span>.
				</h2>
				<p>
					佐賀県出身、東京都在住の梶原己新と申します。職業訓練校でWebデザインやコーディングについて学んでいる中で、特にコーディングに興味を持ちコーダー、フロントエンドエンジニアを目指すようになりました。
				</p>
			</div>
			{/* <Button scrollRef={scrollRef} onScroll={onScroll} /> */}
		</section>
	);
};

export default KV;
