function SimplePage({ title, description, children }) {
	return (
		<section className="internal-page-wrapper">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper">{title}</div>
						{description && (
							<p className="text-muted">{description}</p>
						)}
						{children}
					</div>
				</div>
			</div>
		</section>
	);
}

export default SimplePage;

