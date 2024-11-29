[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoTrendsDemographyInfo

# Interface: IDataforseoTrendsDemographyInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### demography?

> `optional` **demography**: [`Demography`](../classes/Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Defined in

main.ts:137423

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](../classes/DemographyComparisonInfo.md)

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Defined in

main.ts:137427

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

#### Defined in

main.ts:137420

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:137415

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:137417
