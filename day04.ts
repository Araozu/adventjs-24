function createXmasTree(height: number, ornament: string): string {
	function make(size: number, char: string): string {
		return new Array(size).fill(char).join("");
	}

	/* Code here */
	const out: string[] = []
	const sidelen = height - 1;

	for (let i = 0; i < height; i++) {
		let temp = "";
		temp += make(sidelen - i, "_");
		temp += make(i * 2 + 1, ornament);
		temp += make(sidelen - i, "_");

		out.push(temp);
	}
	out.push(make(sidelen, "_") + "#" + make(sidelen, "_"));
	out.push(make(sidelen, "_") + "#" + make(sidelen, "_"));

	return out.join("\n")
}

