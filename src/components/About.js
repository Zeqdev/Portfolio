import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { BiDownArrow } from 'react-icons/bi';
import img from '../assets/me.jpg';
import styles from './About.module.css';

export function About() {
	return (
		<section className={styles.container}>
			<img className={styles.img} loading='lazy' src={img} alt='imagen' />
			<div className={styles.contact}>
				<a href='https://www.linkedin.com/in/ezequiellopez/' target='_blank'>
					<FaLinkedin className={styles.linkedin} />
				</a>
				<a href='https://github.com/Zeqdev' target='_blank'>
					<FaGithub className={styles.github} />
				</a>
				<a href='https://twitter.com/Zeqdev' target='_blank'>
					<FaTwitter className={styles.twitter} />
				</a>
			</div>
			<div className={styles.text}>
				<p>Hello, I'm Ezequiel Lopez a front-end developer.</p>
				<p>
					I have experience with HTML, CSS, Javascript, Typescript and Reactjs. Also, I
					have knowledge about Less and Sass, Tailwind, Bootstrap and Vue.
				</p>
				<p>In my free time, I like to play video games and ride on a bike.</p>
			</div>
			<a href='#skills'>
				<BiDownArrow className={styles.arrow} />
			</a>
		</section>
	);
}
