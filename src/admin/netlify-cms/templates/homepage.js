import React from "react";
import Markdown from 'react-markdown';

import { inject } from "./../inject-frontend-js";
import { yoast } from "./../yoast";
import Hero from "./partials/hero";

export default class Homepage extends React.Component {
	
	componentDidMount () {
		inject();
	}

	render() {
		console.log("Props:");
		console.log(this.props);
		const {entry} = this.props;
		const hero = entry.getIn(["data", "body"]);
		const cards = entry.getIn(["data", "cards"]).toJS();
		const products = entry.getIn(["data", "products"]).toJS();
		const community = entry.getIn(["data", "community"]).toJS();
		const resources = entry.getIn(["data", "resources"]).toJS();
		console.log(products);
		
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
											<h3>{cards.two.title}</h3>
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
						<svg id="prodgrid-img" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 410.5 1291.98">
						<title>Chef Product Stack</title>
						<g id="top-connectors">
						  <path className="stack-background" d="M175.8,157.21A399.86,399.86,0,0,0,293.26,440.78" transform="translate(1 197.98)"/>
						  <path className="stack-background" d="M175.8,157.21V-50" transform="translate(1 197.98)"/>
						</g>
						<g id="bottom-connectors">
						  <path className="stack-background" d="M58.47,723.11a399.5,399.5,0,0,1,117.4,283.41v286.9" transform="translate(1 197.98)"/>
						  <path className="stack-background" d="M58.47,440.78c-78,78-78,204.36,0,282.33" transform="translate(1 197.98)"/>
						  <path className="stack-background" d="M118.92,869v425" transform="translate(1 197.98)"/>
						  <path className="stack-background" d="M58.47,723.11a596.48,596.48,0,0,1,175.27,423.13v147.18" transform="translate(1 197.98)"/>
						  <path className="stack-background" d="M118.92,869A205.7,205.7,0,0,0,58.47,723.11" transform="translate(1 197.98)"/>
						</g>
						<g id="stack-circle">
						  <circle className="stack-background" cx="176.8" cy="756.69" r="166.37"/>
						</g>
						<g id="inside-bottom">
						  <path className="stack-background" d="M175.71,655.15a35,35,0,0,0-1.27,69.92h1.27" transform="translate(1 197.98)"/>
						</g>
						<g id="inside-top">
						  <path className="stack-background" d="M175.71,462.25a35,35,0,0,0,0-69.92" transform="translate(1 197.98)"/>
						</g>
						<g id="inside-vertical">
						  <path className="stack-link" d="M175.71,462.25v192.9" transform="translate(1 197.98)"/>
						</g>
						<g id="automate-connector">
						  <path className="connector" d="M290.37,679.4a83.3,83.3,0,0,1,59.37-24.2H409.5" transform="translate(1 197.98)"/>
						</g>
						<g id="infra-connector">
						  <path className="connector" d="M370.56,585H340.09" transform="translate(1 197.98)"/>
						</g>
						<g id="inspec-connector">
						  <path className="connector" d="M370.56,532.4h-30" transform="translate(1 197.98)"/>
						</g>
						<g id="habitat-connector">
						  <path className="connector" d="M290.37,438a83.34,83.34,0,0,0,59.37,24.2H409.5" transform="translate(1 197.98)"/>
						</g>
						<g id="automate-bubble">
						  <path className="automate-stroke" d="M247.93,655.15H103.5A17.54,17.54,0,0,1,86,637.61h0a17.55,17.55,0,0,1,17.54-17.54H247.93a17.55,17.55,0,0,1,17.54,17.54h0A17.54,17.54,0,0,1,247.93,655.15Z" transform="translate(1 197.98)"/>
						</g>
						<g id="infra-bubble">
						  <path className="infra-stroke" d="M247.93,602.55H103.5A17.54,17.54,0,0,1,86,585h0a17.54,17.54,0,0,1,17.54-17.54H247.93A17.54,17.54,0,0,1,265.47,585h0A17.54,17.54,0,0,1,247.93,602.55Z" transform="translate(1 197.98)"/>
						</g>
						<g id="inspec-bubble">
						  <path className="inspec-stroke" d="M247.93,549.94H103.5A17.54,17.54,0,0,1,86,532.4h0a17.55,17.55,0,0,1,17.54-17.54H247.93a17.55,17.55,0,0,1,17.54,17.54h0A17.54,17.54,0,0,1,247.93,549.94Z" transform="translate(1 197.98)"/>
						</g>
						<g id="habitat-bubble">
						  <path className="habitat-stroke" d="M247.93,497.34H103.5A17.55,17.55,0,0,1,86,479.8h0a17.54,17.54,0,0,1,17.54-17.54H247.93a17.54,17.54,0,0,1,17.54,17.54h0A17.55,17.55,0,0,1,247.93,497.34Z" transform="translate(1 197.98)"/>
						</g>
					  </svg>
  
				   </div>
				   <div className="col-lg-7 col-sm-12 product-grid-copy">
						<div className="product-grid-copy-wrapper">
							<h2>{products.header} {products.header2}</h2>
							<ul className="nav nav-tabs" id="product-tabs" role="tablist">
								<li className="nav-item">
									<a id="habitat-nav" className="nav-link" href="#habitat"> {products.habitat.header} <span className="fa fa-angle-right" aria-hidden="true"> </span></a>
								</li>
								<li className="nav-item">
									<a id="inspec-nav" className="nav-link" href="#inspec" data-toggle="tab">{products.inspec.header} <span className="fa fa-angle-right" aria-hidden="true"> </span></a>
								</li>
									<li className="nav-item">
									 <a id="infra-nav" className="nav-link" href="#infra" data-toggle="tab">{products.infra.header} <span className="fa fa-angle-right" aria-hidden="true"> </span></a>
								</li>
								<li className="nav-item">
									  <a id="automate-nav" className="nav-link" href="#automate" data-toggle="tab">{products.automate.header} <span className="fa fa-angle-right" aria-hidden="true"> </span></a>
								</li>
							</ul>
						</div>
						<div className="tab-content">
							<div className="tab-pane fade" id="habitat">
								<div className="img-left">
									<img src="./img/logos/Habitat.svg" alt="Chef Habitat Wordmark" className="chef-wordmark"/>
								</div>
								<Markdown source={products.habitat.copy} escapeHtml={false} />
													<a className="btn btn-primary" href="{products.habitat.url}">Learn More</a>
							</div>
							<div className="tab-pane fade" id="inspec">
								<div className="img-left">
									<img src="./img/logos/Inspec.svg" alt="Chef Inspec Wordmark" className="chef-wordmark"/>
								</div>
								<Markdown source={products.inspec.copy} escapeHtml={false} />
													<a className="btn btn-primary" href="{products.inspec.url}">Learn More</a>
							</div>
							<div className="tab-pane fade" id="infra">
								<div className="img-left">
									<img src="./img/logos/Infra.svg" alt="Chef Infra Wordmark" className="chef-wordmark"/>
								</div>
									<Markdown source={products.infra.copy} escapeHtml={false} />
													<a className="btn btn-primary" href="{products.infra.url}">Learn More</a>
							</div>
							<div className="tab-pane fade" id="automate">
								<div className="img-left">
									<img src="./img/logos/Automate.svg" alt="Chef Automate Wordmark" className="chef-wordmark"/>
								</div>
								<Markdown source={products.automate.copy} escapeHtml={false} />
													<a className="btn btn-primary" href="{products.automate.url}">Learn More</a>
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
							<h2>{community.header} <span className="highlight">{community.header2}</span></h2>
							<Markdown source={community.body} escapeHtml={false} />
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
							<h2>{ resources.header } { resources.header2 }</h2>
						</div>
						<div className="col-lg-4 col-sm-12 card-container">
								<div className="card">
									<a href={ resources.one.link } className="img">
										<img src={ resources.one.img }/>
									</a>
									<div className="text">
									<Markdown source={resources.one.body} escapeHtml={false} />
									</div>
								</div>
						</div>
						<div className="col-lg-4 col-sm-12 card-container">
							<div className="card">
								<a href={ resources.two.link } className="img">
									<img src={ resources.two.img } />
								</a>
								<div className="text">
									<Markdown source={resources.two.body} escapeHtml={false} />
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-12 card-container">
							<div className="card">
								<a href={ resources.three.link } className="img">
									<img src={ resources.three.img }/>
								</a>
								<div className="text">
									<Markdown source={resources.three.body} escapeHtml={false} />
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
