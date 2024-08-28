[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoTrendsSubregionInterestsElementItem

# Interface: IDataforseoTrendsSubregionInterestsElementItem

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### interests?

> `optional` **interests**: [`Interests`](../classes/Interests.md)[]

subregional keyword popuarity data for each specified term

#### Defined in

main.ts:129552

***

### interests\_comparison?

> `optional` **interests\_comparison**: [`InterestsComparison`](../classes/InterestsComparison.md)

comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null

#### Defined in

main.ts:129555

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the interests and interests_comparison is based on the keywords listed in this array

#### Defined in

main.ts:129550

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:129547
