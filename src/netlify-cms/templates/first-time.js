import React from "react";
import Markdown from 'react-markdown';

export default class FirstTime extends React.Component {
  render() {
	const {entry, widgetFor} = this.props;
	const cards = entry.getIn(["data", "cards"]).toJS();
	const swag_program = entry.getIn(["data", "swag_program"]).toJS();
	
	return <main id="first-time">
		{widgetFor("body")}
		
		{cards.one.title}
		<Markdown source={cards.one.body} escapeHtml={false} />
		
		{cards.two.title}
		<Markdown source={cards.two.body} escapeHtml={false} />
		
		{cards.three.title}
		<Markdown source={cards.three.body} escapeHtml={false} />
		
		{swag_program.header}
		<Markdown source={swag_program.body} escapeHtml={false} />
    </main>;
  }
}