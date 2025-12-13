import { rotations_one, rotations_two } from "../data/rotations";

function taskOne(rotations: string[]): number {
	let zero_counter: number = 0;
	let dial_num: number = 50;

	for (const rotation of rotations) {
		const direction: string = rotation.trim().charAt(0);
		const amount: number = Number(rotation.trim().slice(1));

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

// console.log(taskOne(rotations_one), " < rotations one zero counter");
// console.log(taskOne(rotations_two), " < rotations two zero counter");

function taskTwo(rotations: string[]): number {
	let passing_zero_counter: number = 0;
	let dial_num: number = 50;

	function incrementZeroCounter(dial_num: number): void {
		if (dial_num % 100 === 0) {
			passing_zero_counter++;
		}
	}

	for (const rotation of rotations) {
		const direction: string = rotation.trim().charAt(0);
		const amount: number = Number(rotation.trim().slice(1));

		if (direction.toUpperCase() === "R") {
			for (let i = 0; i < amount; i++) {
				dial_num++;
				incrementZeroCounter(dial_num);
			}
		} else if (direction.toUpperCase() === "L") {
			for (let i = amount; i > 0; i--) {
				dial_num--;
				incrementZeroCounter(dial_num);
			}
		} else {
			continue;
		}
	}

	return passing_zero_counter;
}

// console.log(taskTwo(rotations_one), " < rotations one zero counter");
// console.log(taskTwo(rotations_two), " < rotations two zero counter");
