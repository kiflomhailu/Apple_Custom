import SimplePage from "./SimplePage";

function CartPage() {
	return (
		<SimplePage
			title="Shopping Bag"
			description="Review the items you’d like to purchase from Apple."
		>
			<p>Your bag is currently empty.</p>
			<p className="text-muted">
				Shop the latest devices and accessories, and they&apos;ll appear here.
			</p>
		</SimplePage>
	);
}

export default CartPage;

