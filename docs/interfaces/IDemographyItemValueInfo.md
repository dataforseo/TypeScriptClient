[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDemographyItemValueInfo

# Interface: IDemographyItemValueInfo

Defined in: main.ts:137423

## Indexable

\[`key`: `string`\]: `any`

## Properties

### type?

> `optional` **type**: `string`

Defined in: main.ts:137425

type of element

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:137431

keyword popularity rate within the specified age range
using this value you can understand how popular a keyword is within each age range;
calculation: we determine the highest popularity value for the relevant keyword across all age groups, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 0 means there was not enough data for this term
