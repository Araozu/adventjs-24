type Shoe = {
	type: 'I' | 'R'
	size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
	const out: number[] = []

	const map = {}
	for (const s of shoes) {
		const side = s.type;
		const size = s.size;

		if (!map[size]) {
			map[size] = {
				"I": [],
				"R": []
			};
		}

		const size_map: { I: Array<boolean>, R: Array<boolean> } = map[size]
		size_map[side].push(true);

		// check both sides
		if (size_map.I.length > 0 && size_map.R.length > 0) {
			// push size and pop from maos
			out.push(size);
			size_map.I.pop()
			size_map.R.pop()
		}
	}

	return out
}

