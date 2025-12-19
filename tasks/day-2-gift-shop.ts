const data = require("../data/id-range-list");
console.log("testing")

function taskOne(id_range_list: string): number {
	const data_array = id_range_list.split(",");
	let invalid_id_total: number = 0;

	for (const range of data_array) {
		const hyphen_index = range.indexOf("-");

		const lower_num = Number(range.slice(0, hyphen_index));
		const higher_num = Number(range.slice(hyphen_index + 1));

		for (let i = lower_num; i <= higher_num; i++) {
			const stringified_num = String(i);
			const first_string_half = stringified_num.slice(0, stringified_num.length);
			console.log(first_string_half, " < first half");
			const second_string_half = stringified_num.slice(stringified_num.length + 1);
			console.log(second_string_half, " < second half");

			if (Number(first_string_half) === Number(second_string_half)) {
				invalid_id_total += Number(first_string_half);
			}
		}
	}

	return invalid_id_total;
}

console.log(taskOne(data), " < invalid id total");
