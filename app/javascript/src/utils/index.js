import * as R from "ramda";

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const camelize = str =>
  str
    .replace(/[^a-z0-9]/gi, " ")
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

export const buildSelectOptions = values =>
  values.map(value => ({ label: value, value: camelize(value) }));
