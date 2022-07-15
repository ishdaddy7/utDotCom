'use strict';

class SocialContent extends React.Component {
	constructor(props) {
		super(props)
		this.socialClickTrack = this.socialClickTrack.bind(this);
	}

	socialClickTrack(e) {
		analytics.track('Link Clicked', {
			menuItem: e.target.innerText
		});
	}

	render() {
		const items = [];
		const socialData = [
			{
				site: "Spotify",
				url: "https://spoti.fi/3y5smxE",
				icon: "/images/spotify.png"
			},
			{
				site: "Apple",
				url: "https://itunes.apple.com/us/artist/1547539476",
				icon: "/images/apple.svg"
			},
			{
				site: "Facebook",
				url: "https://www.facebook.com/UnicornTaxidermy",
				icon: "/images/social-media-icon-_0000s_0020_facebook.png"
			},
			{
				site: "Instagram",
				url: "https://www.instagram.com/unicorn_taxidermy/",
				icon: "/images/social-media-icon-_0000s_0017_instagram.png"
			},
			{
				site: "Twitter",
				url: "https://twitter.com/unicorntaxiderm",
				icon: "/images/social-media-icon-_0000s_0019_twitter.png"
			},
			{
				site: "Youtube",
				url: "https://www.youtube.com/channel/UCYLDepzuZYGURxhcROQyjKA/featured",
				icon: "/images/social-media-icon-_0000s_0016_youtube.png"
			}
		]

		for (const [index, value] of socialData.entries()) {
			let item = (
				<div key={index} className="col-2">
					<a href={value.url} target="_blank" onClick={this.socialClickTrack}>
						<img height="32" width="32" src={value.icon} />
					{value.site}
					</a>
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
	<SocialContent />,
	document.getElementById('social_content')
)


