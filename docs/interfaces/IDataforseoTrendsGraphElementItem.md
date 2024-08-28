[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoTrendsGraphElementItem

# Interface: IDataforseoTrendsGraphElementItem

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### averages?

> `optional` **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Defined in

main.ts:128739

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

DataForSEO Trends data for the specified parameters

#### Defined in

main.ts:128737

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Defined in

main.ts:128735

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Defined in

main.ts:128732
