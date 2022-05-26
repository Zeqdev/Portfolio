import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiLinux,
} from 'react-icons/si';
import { BiDownArrow } from 'react-icons/bi';
import styles from './Skills.module.css';

export function Skills() {
	return (
		<section id='skills' className={styles.container}>
			<h2 className={styles.title}>Skills</h2>
			<div className={styles.skills}>
				<div>
					<SiHtml5 className={styles.html} />
					<SiCss3 className={styles.css} />
				</div>
				<div>
					<SiJavascript className={styles.js} />
					<SiTypescript className={styles.ts} />
				</div>
				<div>
					<SiReact className={styles.react} />
					<SiLinux className={styles.linux} />
				</div>
			</div>
			<a href='#projects'>
				<BiDownArrow className={styles.arrow} />
			</a>
		</section>
	);
}
