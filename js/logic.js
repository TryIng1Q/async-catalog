import visualFunction from "./visual.js";

const logicFunction = {
	async showEpisodesList() {
		const episodesObj = await fetch('https://swapi.dev/api/films').then(data => data.json());

		visualFunction.drawEpisodesList(episodesObj.results);
	},
};

export default logicFunction;