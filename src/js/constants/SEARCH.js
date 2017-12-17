/* eslint-disable camelcase */

const default_data = [
	{
		artistId: '744880',
		artistName: 'The Weeknd',
		info: 'Feat. August Alsina, Jeremih and more'
	},
	{
		artistId: '57706',
		artistName: 'Selena Gomez',
		info: 'feat. Ariana Grande, Demi Lovato and more'
	},
	{
		artistId: '30005067',
		artistName: 'R. City',
		info: 'Feat. Nelly, Iyaz, Wiz Khalifa and more'
	},
	{
		artistId: '44368',
		artistName: 'Justin Bieber',
		info: 'Feat. Shawn Mendes, One Direciton and more'
	},
	{
		artistId: '43557',
		artistName: 'Major Lazer',
		info: 'Feat. Iyaz, Dillon Francis & DJ Snake and more'
	},
	{
		artistId: '33221',
		artistName: 'Taylor Swift',
		info: 'Feat. Meghan Trainor, Katy Perry and more'
	}
];

export const SEARCH = {
	ACTIVATE_SEARCH: 'activate_search',
	DEACTIVATE_SEARCH: 'deactivate_search',
	DEFAULT_DATA: default_data,
	RECEIVE_DATA: 'receive_data',
	RESET_SEARCH: 'reset_search',
	REQUEST_DATA: 'requst_data',
	SEARCH_THROTTLE: 3000
};