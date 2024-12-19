function prepareGifts(gifts: number[]): number[] {
	return ([...new Set(gifts)]).sort((x, y) => x > y ? 1 : -1);
}

