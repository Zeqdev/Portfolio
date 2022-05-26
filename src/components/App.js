import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Portfolio } from '../pages/Portfolio';

export function App() {
	return (
		<BrowserRouter>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='*' element={<Navigate replace to='/' />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
