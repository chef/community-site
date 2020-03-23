import React from "react";
import Markdown from 'react-markdown'

export default class Hero extends React.Component {
  render() {
    const {content} = this.props;
	
	return <section className="hero">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-9 col-lg-7">
					<Markdown source={content} escapeHtml={false} />
				</div>
			</div>
		</div>
	</section>;

  }
}
