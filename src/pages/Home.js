import { Link } from 'react-router-dom';
import { BiDownArrow } from 'react-icons/bi';
import styles from './Home.module.css';

export function Home() {
	return (
		<div className={styles.container}>
			<h1 className={styles.txt}>Welcome!</h1>
			<Link to='/portfolio'>
				<BiDownArrow className={styles.arrow} />
			</Link>
		</div>
	);
}
