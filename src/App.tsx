import './App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Partners from './components/ui/Partners';
import Exchanger from './components/Exchanger';
import HowItWorks from './components/ui/HowItWorks';
import Coins from './components/ui/Coins';
import ScrollToTopButton from './components/ui/ScrollToTopButton';


function App() {
	
	return (
		<>
			<Header/>
			<main className='main'>
				<Exchanger />
				<section className='desc'>
					<HowItWorks />
					<Coins />
					<Partners />
				</section>
			</main>
			<Footer/>
			<ScrollToTopButton />
		</>
	);
}

export default App;
