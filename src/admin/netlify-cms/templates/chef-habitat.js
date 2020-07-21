import React from "react";
import Markdown from 'react-markdown';

import { inject } from "./../inject-frontend-js";
import Hero from "./partials/hero";
import FourCards from "./partials/four-cards";

export default class ChefHabitat extends React.Component {
	componentDidMount () {
		inject();
	}
	
	render() {

		console.log("PROPS")
		const {entry} = this.props;
		console.log(this.props);
		const hero = entry.getIn(["data", "body"]);
		// const cards = entry.getIn(["data", "cards"]).toJS();
		// const resources = entry.getIn(["data", "resources"]).toJS();

		return <main id="habitat">

			<section className="hero-actions">
			
				<Hero content={hero}/>
				
				<section className="actions">
					{/* <FourCards cards={cards}/> */}
				</section>
				
			</section>

			<section className="resources">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							{/* <h2>{resources.header} <span className="highlight">{resources.headerTwo}</span></h2> */}
						</div>

						<p>Blog posts are pulled automatically</p>

					</div>
				</div>
			</section>
			
		</main>;
	}
}
