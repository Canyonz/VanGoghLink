import { SearchPage } from "@/pages/searchPage";
import { BarInfo } from "@/widgets/barInfo";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header/ui/Header";

function App() {
	return (
		<div className="app base">
			<BarInfo />
			<Header />
			<SearchPage />
			<Footer />
		</div>
	);
}

export default App;
