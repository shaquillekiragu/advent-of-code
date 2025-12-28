const battery_banks_data = require("../data/day-3-battery-banks");

function dayThreeTaskOne(battery_banks: string[]): number {
	console.log(battery_banks[0], " < data element 1");

	let joltage_total: number = 0;

	for (const battery_bank of battery_banks) {
		const joltage_array = battery_bank.split("");
		const max_joltage_digits: string[] = [];

		const nine_twice_regex = /9{2}/;

		if (nine_twice_regex.test(battery_bank)) {
			max_joltage_digits.push("9", "9");
		} else {
			for (const joltage_str of joltage_array) {
				const joltage_num = Number(joltage_str);

				// if (max_joltage_digits.length <= 1 && joltage_num === 9) {
				// 	max_joltage_digits.push(joltage_str);
				// }
			}
		}

		const max_joltage = Number(max_joltage_digits.join(""));
		console.log(max_joltage, " < max joltage");

		joltage_total += max_joltage;
	}

	return joltage_total;
}

console.log(dayThreeTaskOne(battery_banks_data), " < joltage total");
