import google from '../assets/google.png';
import countdown from '../assets/countdown.png';
import ghprofiles from '../assets/ghprofiles.png';
import shoppingcart from '../assets/shoppingcart.png';
import todo from '../assets/todo.png';
import weather from '../assets/weather.png';
import movies from '../assets/movies.png';
import styles from './Projects.module.css';

export function Projects() {
	return (
		<section id='projects' className={styles.container}>
			<h2 className={styles.title}>Projects</h2>
			<div className={styles.projects}>
				<aside>
					<div>
						<a href='https://zeqdev.github.io/Google-clon/' target='_black'>
							<img src={google} alt='Google clon' />
						</a>
					</div>
					<div>
						<a href='https://zeqdev.github.io/Countdown-timer/' target='_black'>
							<img src={countdown} alt='Countdown timer' />
						</a>
					</div>
				</aside>
				<aside>
					<div>
						<a href='https://zeq-githubprofiles.vercel.app/' target='_black'>
							<img src={ghprofiles} alt='Github profiles' />
						</a>
					</div>
					<div>
						<a href='https://zeq-weather.vercel.app/' target='_black'>
							<img src={weather} alt='Weather app' />
						</a>
					</div>
				</aside>
				<aside>
					<div>
						<a href='https://zeq-shoppingcart.vercel.app/' target='_black'>
							<img src={shoppingcart} alt='Shopping cart' />
						</a>
					</div>
					<div>
						<a href='https://zeq-movies.vercel.app/' target='_black'>
							<img src={movies} alt='Movies app' />
						</a>
					</div>
				</aside>
				<aside>
					<div>
						<a href='https://zeq-todo.vercel.app/' target='_black'>
							<img src={todo} alt='Todo list' />
						</a>
					</div>
				</aside>
			</div>
		</section>
	);
}
