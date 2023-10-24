

export const sudoku_url = 'https://sudoku-generator1.p.rapidapi.com/sudoku/generate?seed=1337';
export const sudokuOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST
	}
};

