(async () => {
	const response = await fetch('free.json');
	const data = await response.json();

	const total = data.length;
	
})();