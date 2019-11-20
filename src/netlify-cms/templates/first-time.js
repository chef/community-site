import React from "react";
import Markdown from 'react-markdown';

import { inject } from "./../inject-frontend-js";
import Hero from "./partials/hero";
import ThreeCards from "./partials/three-cards";

export default class FirstTime extends React.Component {
	componentDidMount () {
		inject();
	}
	
	render() {
		const {entry, widgetFor} = this.props;
		const hero = entry.getIn(["data", "body"]);
		const cards = entry.getIn(["data", "cards"]).toJS();
		const swag_program = entry.getIn(["data", "swag_program"]).toJS();
		
		return <main id="first-time">
			<section className="hero-actions">
			
				<Hero content={hero}/>
				
				<section className="actions">
					<ThreeCards cards={cards}/>
				</section>
				
			</section>
			
			<section className="swag-program">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12 col-lg-8 offset-lg-2">
							<h2>{swag_program.header}</h2>
							<img src="/img/lcr-swag.jpg" alt="chef swag" />
							<Markdown source={swag_program.body} escapeHtml={false} />
						</div>
					</div>
				</div>
			</section>
		</main>;
	}
}