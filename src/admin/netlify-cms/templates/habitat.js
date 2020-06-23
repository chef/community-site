import React from "react";
import Markdown from 'react-markdown';

import { inject } from "./../inject-frontend-js";
import Hero from "./partials/hero";
import FourCards from "./partials/four-cards";

export default class Habitat extends React.Component {
	componentDidMount () {
		inject();
	}
	
	render() {
		const {entry} = this.props;
		console.log("--------------------------");
		console.log(this.props);
		const hero = entry.getIn(["data", "body"]);
		const cards = entry.getIn(["data", "cards"]).toJS();
		const usage = entry.getIn(["data", "usage"]).toJS();
		const tutorials = entry.getIn(["data", "tutorials"]).toJS();
		const resources = entry.getIn(["data", "resources"]).toJS();
		const builder = entry.getIn(["data", "builder"]).toJS();

		return <main id="inspec">

			<section className="hero-actions">
			
				<Hero content={hero}/>
				
				<section className="actions">
					<FourCards cards={cards}/>
				</section>
				
			</section>

			<section className="usage">
				<div className="container-fluid">
					<div className="row usage-main">
						<div className="col-sm-12 col-md-6 flex-center">
							Diagram goes here here
						</div>
						
						<div className="col-sm-12 col-md-6">
							<div className="headers">
								<h2><div className="img-left">
									<img
										src="{usage.headerImage}"
										alt="Chef Habitat"
										className="chef-wordmark"
									/>
								</div></h2>
								<ul className="nav nav-tabs" id="habitat-usage-tabs" role="tablist">
									<li className="nav-item">
										<a id="first-nav" className="nav-link active" href="#habitat-usage-one" data-toggle="tab">
											{usage.one.header}
											<span className="fa fa-angle-right" aria-hidden="true"> </span>
										</a>
									</li>
									<li className="nav-item">
										<a id="second-nav" className="nav-link" href="#habitat-usage-two" data-toggle="tab"
											>{usage.two.header}
											<span className="fa fa-angle-right" aria-hidden="true"> </span>
										</a>
									</li>
									<li className="nav-item">
										<a id="third-nav" className="nav-link" href="#habitat-usage-three" data-toggle="tab"
											>{usage.three.header}
											<span className="fa fa-angle-right" aria-hidden="true"> </span>
										</a>
									</li>
								</ul>
							</div>
							<div className="tab-content">
								<div className="tab-pane fade active show" id="habitat-usage-one">
									<div className="row">
										<div className="col-12">
											<Markdown source={usage.one.copy} escapeHtml={false}/>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="habitat-usage-two">
									<div className="row">
										<div className="col-12">
										<Markdown source={usage.two.copy} escapeHtml={false}/>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="habitat-usage-three">
									<div className="row">
										<div className="col-12">
										<Markdown source={usage.three.copy} escapeHtml={false}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="tutorials">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 ">
							<h2>{tutorials.header}</h2>
						</div>
						<div className="col-12 col-md-6">
							<a
								href="{tutorials.columnOne.one.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<p className="number">1</p>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnOne.one.title}</h5>
								</div>
								<div className="col-12">
									<Markdown source={tutorials.columnOne.one.copy} escapeHtml={false}/>
								</div>
							</a>
							<a
								href="{tutorials.columnOne.two.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<p className="number">2</p>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnOne.two.title}</h5>
								</div>
								<div className="col-12">
									<Markdown source={tutorials.columnOne.two.copy} escapeHtml={false}/>
								</div>
							</a>
						
						</div>
						<div className="col-12 col-md-6">
							<a
								href="{tutorials.columnTwo.one.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<p className="number">3</p>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnTwo.one.title}</h5>
								</div>
								<div className="col-12">
									<Markdown source={tutorials.columnTwo.one.copy} escapeHtml={false}/>
								</div>
							</a>
							<a
								href="{tutorials.columnTwo.two.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<p className="number">4</p>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnTwo.two.title}</h5>
								</div>
								<div className="col-12">
									<Markdown source={tutorials.columnTwo.two.copy} escapeHtml={false}/>
								</div>
							</a>
							
						</div>
					</div>
				</div>
			</section>

			<section className="builder">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h2>{builder.header}</h2>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-12 col-lg-7">
							<p>{builder.copy}</p>
						</div>
						<div className="col-12 col-lg-5 text-center">
							<a className="btn btn-primary" href="{builder.ctaOne.link}" target="_blank">{builder.ctaOne.copy}</a>
							<a className="btn btn-secondary" href="{builder.ctaTwo.link}" target="_blank">{builder.ctaTwo.copy}</a>

						</div>
					</div>
				</div>
			</section>

			<section className="resources">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h2>{resources.header} <span className="highlight">{resources.headerTwo}</span></h2>
						</div>

						<p>Blog posts are pulled automatically</p>

						<div className="col-12 text-center mt-4">
							<a className="btn btn-primary" href="https://blog.chef.io/category/inspec/" target="_blank">View all posts</a>
						</div>
					</div>
				</div>
			</section>
			
		</main>;
	}
}
