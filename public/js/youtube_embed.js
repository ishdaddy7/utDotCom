'use strict';

class YouTubeEmbed extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let vidUrl = `https://www.youtube.com/embed/${this.props.vidid}`;

		return (
			<div>
				<iframe width="610" height="310" src={vidUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
		)
	}
}

document.querySelectorAll('.youtube_embed')
	.forEach(domContainer => {
		const vidid = domContainer.dataset.vidid;
		ReactDOM.render(
			<YouTubeEmbed vidid={vidid} />,
			domContainer
		);
	})


