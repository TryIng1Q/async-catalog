const logicFunction = {
	async showEpisodesList() {
		const episodesObj = fetch('https://swapi.dev/api/films').then(data => data.json());

		console.log(episodesObj);
	},
};

export default logicFunction;