import React from "react";
import Markdown from 'react-markdown'

export default class FourCards extends React.Component {
  render() {
    const {cards} = this.props;
	
	return <div className="container-fluid action-cards">

		<div className="row">
			<div className="col-12">
				<h2>{cards.header}</h2>
			</div>
			<div className="col-lg-3 col-12 col-md-6 card-container">
				<div className="card">
					<div className="row">
						<div className="col-sm-12 text-center">
								<img src="{cards.one.icon}" className="card-icon" />
							<h5>.cards.one.title}</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<Markdown source={cards.one.body} escapeHtml={false}/>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-12 col-md-6 card-container">
				<div className="card">
					<div className="row">
						<div className="col-sm-12 text-center">
							<img src="{cards.two.icon}" className="card-icon" />
							<h5>{cards.two.title}</h5>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 events-list">
							<Markdown source={cards.two.body} escapeHtml={false}/>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-12 col-md-6 card-container">
				<div className="card">
					<div className="row">
						<div className="col-sm-12 text-center">
							<img src="{cards.three.icon}" className="card-icon" />
							<h5>{cards.three.title}</h5>
						</div>
					</div>
		
					<div className="row">
						<div className="col-sm-12">
							<Markdown source={cards.three.body} escapeHtml={false}/>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-3 col-12 col-md-6 card-container" data-scroll-speed="8">
				<div className="card">
					<div className="row">
						<div className="col-sm-12 text-center">
							<img src="{cards.four.icon}" className="card-icon" />
							<h5>{cards.four.title}</h5>
						</div>
					</div>
		
					<div className="row">
						<div className="col-sm-12">
							<Markdown source={cards.four.body} escapeHtml={false}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>;

  }
}
