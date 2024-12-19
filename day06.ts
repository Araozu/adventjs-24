function inBox(box: string[]): boolean {
	let star_x = -1
	let star_y = -1

	// find the pos of the star
	for (let i = 0; i < box.length; i += 1) {
		let row = box[i]
		for (let j = 0; j < row.length; j += 1) {
			let cell = row[j]
			if (cell == "*") {
				star_y = i
				star_x = j
			}
		}
	}
	if (star_x === -1 || star_y === -1) {
		return false
	}

	// check that the star has a # on 4 directions: N S E W
	let max_y = box.length
	let max_x = box[0].length
	let found = false

	// NORTH: x static, y dynamic
	found = false
	for (let y = star_y; y >= 0; y -= 1) {
		if (box[y][star_x] === "#") {
			found = true
		}
	}
	if (!found) {
		return false
	}
	// end NORTH

	// SOUTH: x static, y dynamic
	found = false
	for (let y = star_y; y < max_y; y += 1) {
		if (box[y][star_x] === "#") {
			found = true
		}
	}
	if (!found) {
		return false
	}
	// end SOUTH

	// EAST: x dynamic, y static
	found = false
	for (let x = star_x; x < max_x; x += 1) {
		if (box[star_y][x] === "#") {
			found = true
		}
	}
	if (!found) {
		return false
	}
	// end SOUTH

	// WEST: x dynamic, y static
	found = false
	for (let x = star_x; x >= 0; x -= 1) {
		if (box[star_y][x] === "#") {
			found = true
		}
	}
	if (!found) {
		return false
	}
	// end SOUTH


	return true
}


console.log(
	inBox([
		"###",
		"#*#",
		"###"
	]) // ➞ true
)

console.log(
	inBox([
		"####",
		"#* #",
		"#  #",
		"####"
	]) // ➞ true
)

console.log(
	inBox([
		"#####",
		"#   #",
		"#  #*",
		"#####"
	]) // ➞ false
)

console.log(
	inBox([
		"#####",
		"#   #",
		"#   #",
		"#   #",
		"#####"
	]) // ➞ false
)
