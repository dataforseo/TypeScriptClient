**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoTrendsDemographyInfo

# Interface: IDataforseoTrendsDemographyInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### demography?

> **`optional`** **demography**: [`Demography`](../classes/Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Source

main.ts:129012

***

### demography\_comparison?

> **`optional`** **demography\_comparison**: [`DemographyComparisonInfo`](../classes/DemographyComparisonInfo.md)

comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null

#### Source

main.ts:129016

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array

#### Source

main.ts:129009

***

### position?

> **`optional`** **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Source

main.ts:129004

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:129006
