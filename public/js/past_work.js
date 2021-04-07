'use strict';

class PastWork extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const items = [];
		const pastWorks = [
			{
				title: "Miles Fisher / Don't Let Go",
				credits: "Co-producer, guitar, synths, midi programming",
				id: "NOP_x9gnDUs"
			},
			{
				title: 'Kayce Laine / Fly Too High',
				credits: 'Co-producer, mixer',
				id: "LzRm1xXgQZw"
			},
			{
				title: 'Light Bike - Smile feat. Kayce Laine',
				credits: 'Co-writer, co-producer, guitars, synths, midi programming',
				id: "Bv1EkNi8vLk"
			},
			{
				title: 'Blip Blip Bleep / Human',
				credits: 'Songwriter, producer, vocals, guitars, synths',
				id: "AX6afZxDBJw"
			},
			{
				title: 'Blip Blip Bleep / Anime Eyes',
				credits: 'Songwriter, producer, vocals, guitars, synths',
				id: "dEyN8HPsGvw"
			},
			{
				title: 'Blip Blip Bleep / Dance Floor Makeout',
				credits: 'Co-songwriter, producer, vocals, guitars, synths',
				id: "jKX3ZW20TXI"
			},
			{
				title: 'Miles Fisher / This Must Be The Place',
				credits: 'Co-producer, guitar, synths, midi programming',
				id: "G29d6RDSK1c"
			}
		]

		for (const [index, value] of pastWorks.entries()) {
			let vidUrl = 'https://www.youtube.com/embed/[vidId]'.replace('[vidId]',value.id)
			let item = (
				<div className="row" key={index}>
					<div className="col-4">
						<h4 className="font-light">{value.title}</h4>
						<p>{value.credits}</p>
					</div>
					<div className="col-8">
						<div className="youtube_embed">
							<iframe width="610" height="310" src={vidUrl} frameBorder="0" allowFullScreen allow-scripts allow-same-origin></iframe>
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
	<PastWork />,
	document.getElementById('past_work')
)


