import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categoryConfig from "./categoryConfig";

function ProductDetailPage() {
	const { productId } = useParams();
	const config = categoryConfig.iphone;
	const [product, setProduct] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		async function loadProduct() {
			try {
				setError(null);
				const response = await fetch(
					`${process.env.PUBLIC_URL}/${config.jsonFile}`,
					{ signal: controller.signal }
				);

				if (!response.ok) {
					throw new Error("Unable to load product details.");
				}

				const data = await response.json();
				const items = data.products || [];
				const match = items.find(
					(item) => item.Id.toLowerCase() === productId?.toLowerCase()
				);

				setProduct(match || null);
			} catch (err) {
				if (err.name !== "AbortError") {
					setError(err.message);
				}
			}
		}

		loadProduct();

		return () => controller.abort();
	}, [config.jsonFile, productId]);

	if (error) {
		return (
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<p className="text-danger">{error}</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

	if (!product) {
		return (
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<p className="text-muted">Product not found.</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

	const productImage =
		config.imageMap?.[product.Id] ||
		config.imageMap?.[product.Id?.charAt(0).toUpperCase() + product.Id?.slice(1)] ||
		product.img;

	return (
		<section className="internal-page-wrapper">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12">
						<div className="product-title">{product.Title}</div>
						{product.Brief && (
							<div className="description-wraper">{product.Brief}</div>
						)}
					</div>
				</div>
				<div className="row justify-content-center text-center product-holder h-100">
					<div className="col-sm-12 col-md-6 my-auto">
						{product.StartPrice && (
							<div className="starting-price">
								Starting at {product.StartPrice}
							</div>
						)}
						{product.PriceRange && (
							<div className="monthly-price">{product.PriceRange}</div>
						)}
						{product.Description && (
							<div className="product-details">{product.Description}</div>
						)}
					</div>
					<div className="col-sm-12 col-md-6">
						<div className="prodict-image">
							<img src={productImage} alt={product.Title} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductDetailPage;

