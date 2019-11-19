import React from "react";
import Markdown from 'react-markdown';

import Hero from "./partials/hero";

export default class Homepage extends React.Component {
  render() {
	const {entry} = this.props;
	const hero = entry.getIn(["data", "body"]);
	const cards = entry.getIn(["data", "cards"]).toJS();
	const products = entry.getIn(["data", "products"]).toJS();

	return <main id="home">

		<section className="hero-actions">
        
			<Hero content={hero}/>
			
			<section className="actions">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-4 col-sm-12 card-container" data-scroll-speed="4">
							<div className="card">
								<div className="row">
									<div className="col-8">
										<h3>{cards.one.title}</h3>
									</div>
									<div className="col-4 text-right">
										<img src={cards.one.icon} className="card-icon" />
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<Markdown source={cards.one.body} escapeHtml={false} />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12 card-container" data-scroll-speed="4">
							<div className="card">
								<div className="row">
									<div className="col-8">
										<h3>{cards.one.title}</h3>
									</div>
									<div className="col-4 text-right">
										<img src={cards.two.icon} className="card-icon" />
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										[events listing]
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12 card-container" data-scroll-speed="4">
							<div className="card">
								<div className="row">
									<div className="col-8">
										<h3>{cards.one.title}</h3>
									</div>
									<div className="col-4 text-right">
										<img src={cards.three.icon} className="card-icon" />
									</div>
								</div>
								<div className="row">
									<div className="col-sm-12">
										<Markdown source={cards.three.body} escapeHtml={false} />
										[social]
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-wave"><div><img src="/img/bg-wave.png" /></div></div>
			</section>
			
		</section>
		
		<section className="product-grid">
			<div className="container-fluid">
				<div className="row product-grid-main">
				   <div className="col-lg-4 offset-lg-1 col-sm-12 flex-center">
					   <img src="/img/prodviz_v2.png" alt="Product grid visualization" id="prodgrid-img" />
				   </div>
				   <div className="col-lg-6 col-sm-12 product-grid-copy">
						<div className="product-grid-copy-wrapper">
							<h2>{products.header} <span className="highlight">{products.header2}</span></h2>
							<ul className="nav nav-tabs" id="myTab" role="tablist">
								 <li className="nav-item">
								   <a className="nav-link active" href="#infra" data-toggle="tab">{products.infra.header}</a>
								 </li>
								 <li className="nav-item">
								   <a className="nav-link" href="#inspec" data-toggle="tab">{products.inspec.header}</a>
								 </li>
								 <li className="nav-item">
								   <a className="nav-link" href="#application" data-toggle="tab">{products.application.header}</a>
								 </li>
								 <li className="nav-item">
								   <a className="nav-link" href="#observability" data-toggle="tab">{products.observability.header}</a>
								 </li>
							 </ul>
							<div className="tab-content">
								 <div className="tab-pane fade show active" id="infra">
									<Markdown source={products.infra.copy} escapeHtml={false} />
									<a className="btn btn-primary" href="{products.infra.url}">Learn More</a>
								 </div>
								 <div className="tab-pane fade" id="inspec">
									<Markdown source={products.inspec.copy} escapeHtml={false} />
									<a className="btn btn-primary" href="{products.inspec.url}">Learn More</a>
								 </div>
								 <div className="tab-pane fade" id="application">
									<Markdown source={products.application.copy} escapeHtml={false} />
									<a className="btn btn-primary" href="{products.application.url}">Learn More</a>
								 </div>
								 <div className="tab-pane fade" id="observability">
									<Markdown source={products.observability.copy} escapeHtml={false} />
									<a className="btn btn-primary" href="{products.observability.url}">Learn More</a>
								 </div>
							 </div>
					   </div>
				   </div>
				</div>
			</div>
		</section>
		
		<section className="community">
			<div className="container-fluid no-max">
				<div className="row">
					<div className="col-lg-3 img img-left">
					</div>
					<div className="col-lg-4 community-copy">
						<h2>We're all in this <span className="highlight">Together</span></h2>
						<p>Community has always been a part of what we do at Chef. Everyone is invited.</p>
				
						<p>We learn from you and your innovative uses of our products, and the whole community benefits from contributions from teams at companies like Nordstrom and Alaska Airlines. We welcome your contributions, suggestions, and questions on all of our projects.</p>
				
						<a href="#" className="btn btn-primary-white">Learn More</a>
					</div>
					<div className="col-lg-5 img img-right">
					</div>
				</div>
			</div>
		</section>
		
		<section className="resources">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h2>Community <span className="highlight">Resources</span></h2>
					</div>
					<div className="col-lg-4 col-sm-12 card-container">
						<div className="card">
							<div className="img">
								<img src="/img/blog-fpo.jpg" alt="" />
							</div>
							<div className="text">
								<h4>Packaging COT Applications for Windows</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut distinctio omnis architecto pariatur totam rerum rem. Dicta, ducimus praesentium a similique molestiae, in dolorum soluta fuga vitae, tempore impedit.</p>
								<a href="#">Read More &raquo;</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12 card-container">
						<div className="card">
							<div className="img">
								<img src="/img/blog-fpo.jpg" alt="" />
							</div>
							<div className="text">
								<h4>Packaging COT Applications for Windows</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut distinctio omnis architecto pariatur totam rerum rem. Dicta, ducimus praesentium a similique molestiae, in dolorum soluta fuga vitae, tempore impedit.</p>
								<a href="#">Read More &raquo;</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-12 card-container">
						<div className="card">
							<div className="img">
								<img src="/img/blog-fpo.jpg" alt="" />
							</div>
							<div className="text">
								<h4>Packaging COT Applications for Windows</h4>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aut distinctio omnis architecto pariatur totam rerum rem. Dicta, ducimus praesentium a similique molestiae, in dolorum soluta fuga vitae, tempore impedit.</p>
								<a href="#">Read More &raquo;</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		
		<section className="discourse">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">Discourse feed</div>
				</div>
			</div>
		</section>
    </main>;
  }
}