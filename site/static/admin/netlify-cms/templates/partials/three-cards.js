import React from "react";
import Markdown from 'react-markdown'

export default class ThreeCards extends React.Component {
  render() {
    const {cards} = this.props;
	
	return <div className="container-fluid">
		<div className="row">
			<div className="col-lg-4 col-sm-12 card-container">
				<div className="card">
					<div className="row">
						<div className="col-sm-12">
							<h3>{cards.one.title}</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<Markdown source={cards.one.body} escapeHtml={false} />
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-sm-12 card-container">
				<div className="card">
					<div className="row">
						<div className="col-sm-12">
							<h3>{cards.two.title}</h3>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 events-list">
							<Markdown source={cards.two.body} escapeHtml={false} />
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-sm-12 card-container">
				<div className="card">
					<div className="row">
						<div className="col-sm-12">
							<h3>{cards.three.title}</h3>
						</div>
					</div>
		
					<div className="row">
						<div className="col-sm-12">
							<Markdown source={cards.three.body} escapeHtml={false} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>;

  }
}
