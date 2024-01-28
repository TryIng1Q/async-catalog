import visualFunction from "./visual.js";

const logicFunction = {
	uploadedCSSstyles: {
		'/episodes-list-page': null,
		'/episode-info-page': null,
	},
	async loadCSSstyle() {
		const currentPage = window.location.pathname;

		if (this.uploadedCSSstyles[currentPage]) return this.uploadedCSSstyles[currentPage];

		let cssStyleHref;

		switch (currentPage) {
			case '/episodes-list-page':
				cssStyleHref = 'styles/episodes-list.css'
				break;
			case '/episode-info-page':
				cssStyleHref = 'styles/episode-info.css'
				break;
		}

		this.uploadedCSSstyles[currentPage] = new Promise(resolve => {
			const cssLink = document.createElement('link');
			cssLink.rel = 'stylesheet';
			cssLink.href = cssStyleHref;
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