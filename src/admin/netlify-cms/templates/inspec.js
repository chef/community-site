import React from "react";
import Markdown from 'react-markdown';

import { inject } from "../inject-frontend-js";
import Hero from "./partials/hero";
import FourCards from "./partials/four-cards";

export default class Inspec extends React.Component {
	componentDidMount () {
		inject();
	}
	
	render() {
		const {entry, widgetFor} = this.props;
		const hero = entry.getIn(["data", "body"]);
		const cards = entry.getIn(["data", "cards"]).toJS();
		const getStarted = entry.getIn(["data", "getStarted"]).toJS();
		const benefits = entry.getIn(["data", "benefits"]).toJS();
		const tutorials = entry.getIn(["data", "tutorials"]).toJS();
		const resources = entry.getIn(["data", "resources"]).toJS();
		const contact = entry.getIn(["data", "contact"]).toJS();

		return <main id="inspec">

			<section className="hero-actions">
			
				<Hero content={hero}/>
				
				<section className="actions">
					<FourCards cards={cards}/>
				</section>
				
			</section>

			<section className="benefits">
				<div className="container-fluid">
					<div className="row benefits-main">
						<div className="col-sm-12">
							<div className="headers">
								<h2><div className="img-left">
									<img
										src="{benefits.headerImage}"
										alt="Chef Inspec"
										className="chef-wordmark"
									/>
									<span>{benefits.headerTwo}</span>
								</div>
								</h2>
								<ul className="nav nav-tabs" id="benefits-tabs" role="tablist">
									<li className="nav-item">
										<a id="first-nav" className="nav-link active" href="#one" data-toggle="tab">
											{benefits.one.header}
											<span className="fa fa-angle-right" aria-hidden="true"> </span>
										</a>
									</li>
									<li className="nav-item">
										<a id="second-nav" className="nav-link" href="#two" data-toggle="tab"
											>{benefits.two.header}
											<span className="fa fa-angle-right" aria-hidden="true"> </span>
										</a>
									</li>
									<li className="nav-item">
										<a id="third-nav" className="nav-link" href="#three" data-toggle="tab"
											>{benefits.three.header}
											<span className="fa fa-angle-right" aria-hidden="true"> </span>
										</a>
									</li>
								</ul>
							</div>
							<div className="tab-content">
								<div className="tab-pane fade active show" id="one">
									<div className="row">
										<div className="col-12 col-md-6 order-md-2">
											<pre className="light"><code className="language-bash">
												{benefits.one.code}
											</code></pre>
										</div>
										<div className="col-12 col-md-6 order-md-1">
											<Markdown source={benefits.one.copy} escapeHtml={false}/>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="two">
									<div className="row">
										<div className="col-12 col-md-6 order-md-2">
											<pre className="light"><code className="language-bash">
												{benefits.two.code}
											</code></pre>
										</div>
										<div className="col-12 col-md-6 order-md-1">
											<Markdown source={benefits.two.copy} escapeHtml={false}/>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="three">
									<div className="row">
										<div className="col-12 col-md-6 order-md-2">
											<pre className="light"><code className="language-bash">
												{benefits.three.code}
											</code></pre>
										</div>
										<div className="col-12 col-md-6 order-md-1">
											<Markdown source={benefits.three.copy} escapeHtml={false}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="get-started">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<h2>{getStarted.header}</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="row align-items-center">
								<div className="col-2 col-md-1">
										<p className="number">1</p>
								</div>
								<div className="col-10 col-md-5">
										<h4>{getStarted.one.header}</h4>
										<p>{getStarted.one.copy}</p>
								</div>
								<div className="col-12 col-md-6">
									<pre>
										<code className="language-bash">{getStarted.one.code}</code>
									</pre>    
								</div>
							</div>
							<div className="row align-items-center">
									<div className="col-2 col-md-1">
										<p className="number">2</p>
								</div>
								<div className="col-10 col-md-5">
									<h4>{getStarted.two.header}</h4>
									<p>{getStarted.two.copy}</p>
								</div>
								<div className="col-12 col-md-6">
									<pre>
									<code className="language-bash">{getStarted.two.code}</code>
									</pre>     
								</div>
							</div>
							<div className="row align-items-center">
								<div className="col-2 col-md-1">
										<p className="number">3</p>
								</div>
								<div className="col-10 col-md-5">
									<h4>{getStarted.three.header}</h4>
									<p>{getStarted.three.copy}</p>
								</div>
								<div className="col-12 col-md-6">
									<pre>
										<code className="language-bash">{getStarted.three.code}</code>
									</pre>      
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="tutorials">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-6">
							<h2>{tutorials.columnOne.header}</h2>
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
							<a
								href="{tutorials.columnOne.three.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<p className="number">3</p>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnOne.three.title}</h5>
								</div>
								<div className="col-12">
									<Markdown source={tutorials.columnOne.three.copy} escapeHtml={false}/>
								</div>
							</a>
							<a
								href="{tutorials.columnOne.four.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<p className="number">4</p>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnOne.four.title}</h5>
								</div>
								<div className="col-12">
									<Markdown source={tutorials.columnOne.four.copy} escapeHtml={false}/>
								</div>
							</a>
						</div>
						<div className="col-12 col-md-6">
							<h2>{tutorials.columnTwo.header}</h2>
							<a
								href="{tutorials.columnTwo.one.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<img
										src="{tutorials.columnTwo.one.image}"
										className="img-round"
										width="60"
										alt="{tutorials.columnTwo.one.author}"
									/>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnTwo.one.title}</h5>
									<p>By {tutorials.columnTwo.one.author}</p>
								</div>
							</a>
							<a
								href="{tutorials.columnTwo.two.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<img
										src="{tutorials.columnTwo.two.image}"
										className="img-round"
										width="60"
										alt="{tutorials.columnTwo.two.author}"
									/>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnTwo.two.title}</h5>
									<p>By {tutorials.columnTwo.two.author}</p>
								</div>
							</a>
							<a
								href="{tutorials.columnTwo.three.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<img
										src="{tutorials.columnTwo.three.image}"
										className="img-round"
										width="60"
										alt="{tutorials.columnTwo.three.author}"
									/>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnTwo.three.title}</h5>
									<p>By {tutorials.columnTwo.three.author}</p>
								</div>
							</a>
							<a
								href="{tutorials.columnTwo.four.link}"
								className="card-tutorial row align-items-center"
							>
								<div className="col-2 text-center">
									<img
										src="{tutorials.columnTwo.four.image}"
										className="img-round"
										width="60"
										alt="{tutorials.columnTwo.four.author}"
									/>
								</div>
								<div className="col-10">
									<h5>{tutorials.columnTwo.four.title}</h5>
									<p>By {tutorials.columnTwo.four.author}</p>
								</div>
							</a>
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
