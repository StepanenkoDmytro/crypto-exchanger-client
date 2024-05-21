import './App.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Partners from './components/ui/Partners';
import Exchanger from './components/Exchanger';


function App() {
	
	return (
		<>
			<Header/>
			<main>
				<Exchanger />
				<Partners />
			</main>
			<Footer/>
		</>
	);
}

export default App;
