import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								Home
							</a>
							<a className="nav-link" href="#">
								Features
							</a>
							<a className="nav-link" href="#">
								Pricing
							</a>
							<a className="nav-link disabled">Disabled</a>
						</div>
					</div>
				</div>
			</nav>
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
			<div style={{ display: "flex" }}>
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://placeimg.com/286/180/any"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://placeimg.com/286/180/any"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://placeimg.com/286/180/any"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src="https://placeimg.com/286/180/any"
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
