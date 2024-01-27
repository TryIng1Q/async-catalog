import visualFunction from "./visual.js";

const logicFunction = {
	uploadedCSSstyles: {
		'/episodes-list-page': 'styles/episodes-list.css',
		'/episode-info-page': 'styles/episode-info.css',
	},
	async loadCSSstyle(url) {
		// if (url) return this.uploadedCSSstyles[url];
		
		new Promise(resolve => {
			const cssLink = document.createElement('link');
			cssLink.rel = 'stylesheet';
			cssLink.href = 'styles/episodes-list.css';

			cssLink.addEventListener('load', () => {
				resolve();
			});
			document.head.append(cssLink);
		});
	},
	async showEpisodesList() {
		const episodesObj = await fetch('https://swapi.dev/api/films').then(data => data.json());

		visualFunction.drawEpisodesList(episodesObj.results);
	},
};

export default logicFunction;