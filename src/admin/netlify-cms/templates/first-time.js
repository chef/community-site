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
		console.log("PROPS:");
		console.log(this.props);
		const {entry} = this.props;
		const hero = entry.getIn(["data", "body"]);
		const cards = entry.getIn(["data", "cards"]).toJS();
		
		return <main id="first-time">
			<section className="hero-actions">
			
				<Hero content={hero}/>
				
				<section className="actions">
					<ThreeCards cards={cards}/>
				</section>
				
			</section>
		</main>;
	}
}
