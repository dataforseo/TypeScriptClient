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

main.ts:127588

***

### demography\_comparison?

> `optional` **demography\_comparison**: [`DemographyComparisonInfo`](../classes/DemographyComparisonInfo.md)

#### Defined in

main.ts:127589

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`keywords`](IBaseDataforseoTrendsItem.md#keywords)

#### Defined in

main.ts:21962

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`position`](IBaseDataforseoTrendsItem.md#position)

#### Defined in

main.ts:21959

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`type`](IBaseDataforseoTrendsItem.md#type)

#### Defined in

main.ts:21956
