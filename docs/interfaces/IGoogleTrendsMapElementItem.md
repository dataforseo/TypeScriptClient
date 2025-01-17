[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleTrendsMapElementItem

# Interface: IGoogleTrendsMapElementItem

Defined in: main.ts:134410

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### data?

> `optional` **data**: [`TrendsMapDataInfo`](../classes/TrendsMapDataInfo.md)[]

Defined in: main.ts:134412

Google Trends data from the corresponding item

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22784

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`keywords`](IBaseGoogleTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22779

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`position`](IBaseGoogleTrendsItem.md#position)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22781

title of the element in Google Trends

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`title`](IBaseGoogleTrendsItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22776

type of element

#### Inherited from

[`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md).[`type`](IBaseGoogleTrendsItem.md#type)
