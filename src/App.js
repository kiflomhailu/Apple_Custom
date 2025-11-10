import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Alertsection from "./components/Alertsection";
import Firstsection from "./components/Firstsection";
import Secondsection from "./components/Secondsection";
import Thirdsection from "./components/Thirdsection";
import Fourthsection from "./components/Fourthsection";
import Fifthsection from "./components/Fifthsection";
import Sixthsection from "./components/Sixthsection";
import Footer from "./components/Footer";
import Youtube from "./components/Youtube";
import MacPage from "./pages/MacPage";
import IpadPage from "./pages/IpadPage";
import IphonePage from "./pages/IphonePage";
import WatchPage from "./pages/WatchPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import TvHomePage from "./pages/TvHomePage";
import MusicPage from "./pages/MusicPage";
import SupportPage from "./pages/SupportPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";

function HomePage() {
	return (
		<>
			<Alertsection />
			<Firstsection />
			<Secondsection />
			<Thirdsection />
			<Fourthsection />
			<Fifthsection />
			<Sixthsection />
			<Youtube />
		</>
	);
}

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/mac" element={<MacPage />} />
				<Route path="/ipad" element={<IpadPage />} />
				<Route path="/iphone" element={<IphonePage />} />
				<Route path="/watch" element={<WatchPage />} />
				<Route path="/tv" element={<TvHomePage />} />
				<Route path="/music" element={<MusicPage />} />
				<Route path="/support" element={<SupportPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/iphone/:productId" element={<ProductDetailPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
