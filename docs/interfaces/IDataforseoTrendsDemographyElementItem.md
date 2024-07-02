**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoTrendsDemographyElementItem

# Interface: IDataforseoTrendsDemographyElementItem

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### demography?

> **`optional`** **demography**: [`Demography`](../classes/Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Source

main.ts:129723

***

### demography\_comparison?

> **`optional`** **demography\_comparison**: [`DemographyComparisonInfo`](../classes/DemographyComparisonInfo.md)

#### Source

main.ts:129724

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Source

main.ts:129720

***

### position?

> **`optional`** **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Source

main.ts:129717
