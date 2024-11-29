[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleTrendsQueriesListElementItem

# Interface: IGoogleTrendsQueriesListElementItem

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data?

> `optional` **data**: [`QueriesListDataInfo`](../classes/QueriesListDataInfo.md)

Google Trends data from the corresponding item

#### Defined in

main.ts:134526

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`keywords`](IBaseGoogleTrendsItem.md#keywords)

#### Defined in

main.ts:22784

***

### position?

> `optional` **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`position`](IBaseGoogleTrendsItem.md#position)

#### Defined in

main.ts:22779

***

### title?

> `optional` **title**: `string`

title of the element in Google Trends

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`title`](IBaseGoogleTrendsItem.md#title)

#### Defined in

main.ts:22781

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`type`](IBaseGoogleTrendsItem.md#type)

#### Defined in

main.ts:22776
