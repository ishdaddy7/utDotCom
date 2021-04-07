'use strict';

class Releases extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const items = [];
		const releases = [
			{
				title: "Never Break Your Heart (2021)",
				credits: "",
				id: "bjyRbiWo8R4"
			},
			{
				title: 'I Don\'t Know How (2020 as XANHAN)',
				credits: '',
				id: 'OH4ZAE4fUrg'
			}
		]

		for (const [index, value] of releases.entries()) {
			let vidUrl = 'https://www.youtube.com/embed/[vidId]'.replace('[vidId]',value.id)
			let item = (
				<div className="row" key={index}>
					<div className="col-4">
						<h4 className="font-light">{value.title}</h4>
						<p>{value.credits}</p>
					</div>
					<div className="col-8">
						<div className="youtube_embed">
							<iframe width="610" height="310" src={vidUrl} frameBorder="0" allow-scripts allow-same-origin allowFullScreen></iframe>
						</div>
					</div>
				</div>
			)

			items.push(item);
		}

		return (
			<div>
				{items}
			</div>
		)
	}
}

ReactDOM.render(
	<Releases />,
	document.getElementById('releases')
)


