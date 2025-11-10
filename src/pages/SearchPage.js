import SimplePage from "./SimplePage";

function SearchPage() {
	return (
		<SimplePage
			title="Search"
			description="Looking for something specific? Use the global search below."
		>
			<input
				type="search"
				className="form-control mt-4"
				placeholder="Search the Apple experience"
			/>
		</SimplePage>
	);
}

export default SearchPage;

