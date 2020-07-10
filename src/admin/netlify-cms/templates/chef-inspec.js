import React from "react";
import Markdown from 'react-markdown';

import { inject } from "./../inject-frontend-js";
import Hero from "./partials/hero";
import FourCards from "./partials/four-cards";

export default class ChefInspec extends React.Component {
	componentDidMount () {
		inject();
	}
	
	render() {
		const {entry} = this.props;
		const hero = entry.getIn(["data", "body"]);
		// const cards = entry.getIn(["data", "cards"]).toJS();


		return <main id="inspec">

			<section className="hero-actions">
			
				<Hero content={hero}/>
				
				<section className="actions">
					{/* <FourCards cards={cards}/> */}
				</section>
				
			</section>
			
		</main>;
	}
}
