import React from "react";
import Markdown from 'react-markdown';

export default class Homepage extends React.Component {
  render() {
	const {entry, widgetFor} = this.props;
	const cards = entry.getIn(["data", "cards"]).toJS();
	const products = entry.getIn(["data", "products"]).toJS();
	
	return <main id="home">

		{widgetFor("body")}
		
		{cards.one.title}
		<Markdown source={cards.one.body} escapeHtml={false} />
		
		{cards.two.title}
		<Markdown source={cards.two.body} escapeHtml={false} />
		
		{cards.three.title}
		<Markdown source={cards.three.body} escapeHtml={false} />
		
		{products.header}{products.header2}
		
		{products.infra.header}
		{products.infra.url}
		{products.infra.copy}
		
		{products.inspec.header}
		{products.inspec.url}
		{products.inspec.copy}

    </main>;
  }
}