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

		<section class="hero-actions">
        
			<Hero content={hero}/>
			
			<section class="actions">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-4 col-sm-12 card-container">
							<div class="card">
								<div class="row">
									<div class="col-sm-8">
										<h3>{cards.one.title}</h3>
									</div>
									<div class="col-sm-4">
										{cards.one.icon}
									</div>
								</div>
								<div class="row">
									<div class="col-sm-12">
										<Markdown source={cards.one.body} escapeHtml={false} />
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-sm-12 card-container">
							<div class="card">
								<div class="row">
									<div class="col-sm-8">
										<h3>{cards.two.title}</h3>
									</div>
									<div class="col-sm-4">
										{cards.two.icon}
									</div>
								</div>
								<div class="row">
									<div class="col-sm-12">
										[events listing]
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-sm-12 card-container">
							<div class="card">
								<div class="row">
									<div class="col-sm-8">
										<h3>{cards.three.title}</h3>
									</div>
									<div class="col-sm-4">
										{cards.three.icon}
									</div>
								</div>
								<div class="row">
									<div class="col-sm-12">
										<Markdown source={cards.three.body} escapeHtml={false} />
										[social]
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="bg-wave"><div><img src="/img/bg-wave.png" /></div></div>
			</section>
			
		</section>
		
		<section class="product-grid">
			<div class="container-fluid">
				<div class="row product-grid-main">
				   <div class="col-lg-4 offset-lg-1 col-sm-12 flex-center">
					   <img src="/img/prodviz_v2.png" alt="Product grid visualization" id="prodgrid-img" />
				   </div>
				   <div class="col-lg-6 col-sm-12 product-grid-copy">
						<div class="product-grid-copy-wrapper">
							<h2>{products.header} <span class="highlight">{products.header2}</span></h2>
							<ul class="nav nav-tabs" id="myTab" role="tablist">
								 <li class="nav-item">
								   <a class="nav-link active" href="#infra" data-toggle="tab">{products.infra.header}</a>
								 </li>
								 <li class="nav-item">
								   <a class="nav-link" href="#inspec" data-toggle="tab">{products.inspec.header}</a>
								 </li>
								 <li class="nav-item">
								   <a class="nav-link" href="#application" data-toggle="tab">{products.application.header}</a>
								 </li>
								 <li class="nav-item">
									 <a class="nav-link" href="#observability" data-toggle="tab">{products.observability.header}</a>
								 </li>
							 </ul>
							<div class="tab-content">
								 <div class="tab-pane fade show active" id="infra">
									<Markdown source={products.infra.copy} escapeHtml={false} />
									<a class="btn btn-primary" href="{products.infra.url}">Learn More</a>
								 </div>
								 <div class="tab-pane fade" id="inspec">
									<Markdown source={products.inspec.copy} escapeHtml={false} />
									<a class="btn btn-primary" href="{products.inspec.url}">Learn More</a>
								 </div>
								 <div class="tab-pane fade" id="application">
									<Markdown source={products.application.copy} escapeHtml={false} />
									<a class="btn btn-primary" href="{products.application.url}">Learn More</a>
								 </div>
								 <div class="tab-pane fade" id="observability">
									<Markdown source={products.observability.copy} escapeHtml={false} />
									<a class="btn btn-primary" href="{products.observability.url}">Learn More</a>
								 </div>
							 </div>
					   </div>
				   </div>
				</div>
			</div>
		</section>
		
		{products.header}{products.header2}
		
		{products.infra.header}
		{products.infra.url}
		{products.infra.copy}
		
		{products.inspec.header}
		{products.inspec.url}
		{products.inspec.copy}
		
		{products.application.header}
		{products.application.url}
		{products.application.copy}
		
		{products.observability.header}
		{products.observability.url}
		{products.observability.copy}

    </main>;
  }
}