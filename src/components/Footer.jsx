import React from 'react';

import Contact from './Contact';
import Border from './Border';
import Logos from './Logos';

import Rings from '../assets/pattern-rings.svg';

import styles from '../styles/Footer.module.scss';

const Footer = ({ scrollRef }) => {
	return (
		<footer className={styles.footer} ref={scrollRef}>
			{/* <img className={styles.ring} src={Rings} alt="ring" /> */}
			<div className={`${styles.container} container`}>
				{/* <Border footer={true} /> */}
				<Logos footer="footer" />
			</div>
		</footer>
	);
};

export default Footer;
