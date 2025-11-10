import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/icons/logo-sm.png";
import Search from "../images/icons/search-icon-sm.png";
import Cart from "../images/icons/cart-sm.png";

const navItems = [
	{ path: "/mac", label: "Mac" },
	{ path: "/iphone", label: "iPhone" },
	{ path: "/ipad", label: "iPad" },
	{ path: "/watch", label: "Watch" },
	{ path: "/tv", label: "TV" },
	{ path: "/music", label: "Music" },
	{ path: "/support", label: "Support" },
];

function Header() {
	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
					>
						☰
					</button>
					<Link className="navbar-brand mx-auto" to="/">
						<img src={Logo} alt="Apple" />
					</Link>

					<div className="navbar-collapse collapse">
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							{navItems.map((item) => (
								<li className="nav-item" key={item.path}>
									<NavLink
										className={({ isActive }) =>
											`nav-link js-scroll-trigger${
												isActive ? " active" : ""
											}`
										}
										to={item.path}
									>
										{item.label}
									</NavLink>
								</li>
							))}
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/search">
									<img src={Search} alt="Search" />
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link js-scroll-trigger" to="/cart">
									<img src={Cart} alt="Cart" />
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;
