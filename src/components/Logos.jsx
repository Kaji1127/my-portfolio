import React from 'react';

import { ReactComponent as GithubIcon } from '../assets/icon-github.svg';
import { ReactComponent as FemIcon } from '../assets/icon-frontend-mentor.svg';

import styles from '../styles/Logos.module.scss';

const Logos = ({ footer }) => {
	return (
		<div className={`${styles.logos} ${footer && styles['footer-logos']}`}>
			<h1>KishinKajihara</h1>
			<div className={styles.icons}>
				<a href="https://github.com/Kaji1127" target="_blank">
					<GithubIcon className={styles['icons-github']} alt="github icon" />
				</a>
				<a href="https://www.frontendmentor.io/profile/Kaji1127">
					<FemIcon className={styles['icons-fem']} alt="frontend-mentor icon" />
				</a>
			</div>
		</div>
	);
};

export default Logos;
