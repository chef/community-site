import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Post
const Homepage = createClass({
  render() {
    const { entry, widgetFor } = this.props;

    return html`
		<section class="col-sm-6">
			${widgetFor('body')}
		</section>
    `;
  }
});

export default Homepage;
