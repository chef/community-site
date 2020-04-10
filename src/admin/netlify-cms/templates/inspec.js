import React from "react";
import Markdown from 'react-markdown';

import { inject } from "../inject-frontend-js";
import Hero from "./partials/hero";
import FourCards from "./partials/four-cards";

export default class FirstTime extends React.Component {
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
			
			
		</main>;
	}
}
