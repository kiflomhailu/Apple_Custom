import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import categoryConfig from "./categoryConfig";

function ProductCollectionPage({ category }) {
	const config = categoryConfig[category];
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!config) {
			return;
		}

		const controller = new AbortController();

		async function loadProducts() {
			try {
				setLoading(true);
				setError(null);
				const response = await fetch(
					`${process.env.PUBLIC_URL}/${config.jsonFile}`,
					{ signal: controller.signal }
				);

				if (!response.ok) {
					throw new Error(`Unable to load ${config.jsonFile}`);
				}

				const data = await response.json();
				setProducts(data.products || []);
			} catch (err) {
				if (err.name !== "AbortError") {
					setError(err.message);
				}
			} finally {
				setLoading(false);
			}
		}

		loadProducts();

		return () => controller.abort();
	}, [config]);

	const content = useMemo(() => {
		if (loading) {
			return (
				<div className="row justify-content-center text-center">
					<div className="col-12">
						<p className="text-muted">Loading {category} lineup…</p>
					</div>
				</div>
			);
		}

		if (error) {
			return (
				<div className="row justify-content-center text-center">
					<div className="col-12">
						<p className="text-danger">
							Sorry, we couldn&apos;t load this page right now.
						</p>
					</div>
				</div>
			);
		}

		if (!products.length) {
			return (
				<div className="row justify-content-center text-center">
					<div className="col-12">
						<p className="text-muted">
							No products available at the moment. Please check back later.
						</p>
					</div>
				</div>
			);
		}

		let orderFlag = 1;

		return products.map((product) => {
			const id = product.Id;
			const productImage =
				config.imageMap?.[id] || product.img || config.fallbackImage || "";

			let orderMain = 1;
			let orderImage = 2;

			if (orderFlag !== 1) {
				orderMain = 2;
				orderImage = 1;
				orderFlag--;
			} else {
				orderFlag++;
			}

			const detailPath = config.detailPath
				? `${config.detailPath}/${id}`
				: null;

			return (
				<div
					key={id}
					className="row justify-content-center text-center product-holder h-100"
				>
					<div className={`col-sm-12 col-md-6 my-auto order-${orderMain}`}>
						{product.Alert && (
							<div className="new-alert">{product.Alert}</div>
						)}
						<div className="product-title">{product.Title}</div>
						{product.Brief && (
							<div className="description-wraper">{product.Brief}</div>
						)}
						{product.StartPrice && (
							<div className="starting-price">
								Starting at {product.StartPrice}
							</div>
						)}
						{product.PriceRange && (
							<div className="monthly-price">{product.PriceRange}</div>
						)}
						{detailPath && (
							<div className="links-wrapper">
								<ul>
									<li>
										<Link to={detailPath}>Learn more</Link>
									</li>
								</ul>
							</div>
						)}
					</div>
					<div className={`col-sm-12 col-md-6 order-${orderImage}`}>
						<div className="prodict-image">
							<img src={productImage} alt={product.Title} />
						</div>
					</div>
				</div>
			);
		});
	}, [category, config, error, loading, products]);

	if (!config) {
		return null;
	}

	return (
		<section className="internal-page-wrapper">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper large">{config.pageTitle}</div>
						{config.pageDescription && (
							<div className="brief-description">{config.pageDescription}</div>
						)}
					</div>
				</div>
				{content}
			</div>
		</section>
	);
}

export default ProductCollectionPage;

