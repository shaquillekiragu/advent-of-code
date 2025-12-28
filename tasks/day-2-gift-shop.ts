const id_range_list_data = require("../data/day-2-id-range-list");

function dayTwoTaskOne(id_range_list: string): number {
	const data_array = id_range_list.split(",");
	// console.log(data_array, " < data_array");

	let invalid_id_total: number = 0;

	for (const range of data_array) {
		// if (range === data_array[1]) {
		const hyphen_index = range.indexOf("-");

		const lower_num = Number(range.slice(0, hyphen_index));
		const higher_num = Number(range.slice(hyphen_index + 1));
		console.log(lower_num, " < lower_num");
		console.log(higher_num, " < higher_num");

		for (let i = lower_num; i <= higher_num; i++) {
			const stringified_num = String(i);
			// console.log(stringified_num, " < stringified num");

			const first_string_half = stringified_num.slice(
				0,
				stringified_num.length / 2
			);
			// console.log(first_string_half, " < first half");

			const second_string_half = stringified_num.slice(stringified_num.length / 2);
			// console.log(second_string_half, " < second half");

			if (Number(first_string_half) === Number(second_string_half)) {
				console.log("EQUALS");
				invalid_id_total += Number(stringified_num);
			}
		}
		// }
	}

	return invalid_id_total;
}

// console.log(dayTwoTaskOne(id_range_list_data), " < invalid id total");
