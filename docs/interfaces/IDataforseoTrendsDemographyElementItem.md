[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoTrendsDemographyElementItem

# Interface: IDataforseoTrendsDemographyElementItem

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### demography?

> `optional` **demography**: [`Demography`](../classes/Demography.md)

demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender

#### Defined in

main.ts:130722

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](../classes/DemographyComparisonInfo.md)

#### Defined in

main.ts:130723

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Defined in

main.ts:130719

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:130716
