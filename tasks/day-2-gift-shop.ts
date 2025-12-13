const data = require("../data/id-range-list");

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
			const second_string_half = stringified_num.slice(stringified_num.length + 1);

			if (Number(first_string_half) === Number(second_string_half)) {
				invalid_id_total += Number(first_string_half);
			}
		}
	}

	return invalid_id_total;
}

console.log(" < invalid id total");
console.log(taskOne(data), " < invalid id total");
