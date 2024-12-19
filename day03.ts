type Inventory = Array<
	{ name: string, quantity: number, category: string }
>

type Out = {
	[k: string]: {
		[k: string]: number
	}
}

function organizeInventory(inventory: Inventory): object {
	if (inventory.length === 0) return {}

	const obj: Out = {};
	for (const toy of inventory) {
		const k = toy.category;
		const n = toy.name;
		if (!obj[k]) {
			obj[k] = {};
		}

		obj[k][n] = (obj[k][n] ?? 0) + toy.quantity;
	}

	// Code here
	return obj
}

