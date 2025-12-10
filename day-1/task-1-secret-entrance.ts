import rotations from "./task-1-rotations-data";

function secretEntrance(rotations: string[]): number {
	let zero_counter: number = 0;
	let dial_num: number = 50;

	for (const rotation of rotations) {
		const direction: string = rotation.trim().charAt(0);
		const amount: number = Number(rotation.trim().slice(1));

		const range_start: number = 0;
		const range_end: number = 99;

		if (direction.toUpperCase() === "R") {
			dial_num += amount;
		} else if (direction.toUpperCase() === "L") {
			dial_num -= amount;
		} else {
			continue;
		}

		if (dial_num % 100 === 0) {
			zero_counter++;
		}
	}

	return zero_counter;
}

console.log(secretEntrance(rotations));
