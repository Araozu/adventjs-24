function createFrame(names) {
	function getName(str, len) {
		const x = str.padEnd(len, " ");
		return `* ${x} *`
	}

	// Code here
	const longest = names.reduce((acc, next) => {
		if (next.length > acc) return next.length;
		else return acc;
	}, 0)
	console.log("longest:", longest);

	const topBottom = (new Array(longest + 4)).fill("*").join("");
	const out = [
		topBottom,
		...names.map(x => getName(x, longest)),
		topBottom,
	]

	return out.join("\n")
}
