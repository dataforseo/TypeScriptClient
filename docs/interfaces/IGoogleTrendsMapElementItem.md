[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleTrendsMapElementItem

# Interface: IGoogleTrendsMapElementItem

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data?

> `optional` **data**: [`TrendsMapDataInfo`](../classes/TrendsMapDataInfo.md)[]

Google Trends data from the corresponding item

#### Defined in

main.ts:124095

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`keywords`](IBaseGoogleTrendsItem.md#keywords)

#### Defined in

main.ts:21886

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`position`](IBaseGoogleTrendsItem.md#position)

#### Defined in

main.ts:21881

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`title`](IBaseGoogleTrendsItem.md#title)

#### Defined in

main.ts:21883

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`type`](IBaseGoogleTrendsItem.md#type)

#### Defined in

main.ts:21878
