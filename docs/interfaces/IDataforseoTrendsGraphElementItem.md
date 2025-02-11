[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoTrendsGraphElementItem

# Interface: IDataforseoTrendsGraphElementItem

Defined in: main.ts:136167

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### averages?

> `optional` **averages**: `number`[]

Defined in: main.ts:136171

keyword popularity values averaged over the whole time range

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

Defined in: main.ts:136169

DataForSEO Trends data for the specified parameters

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:22865

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`keywords`](IBaseDataforseoTrendsItem.md#keywords)

***

### position?

> `optional` **position**: `number`

Defined in: main.ts:22862

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`position`](IBaseDataforseoTrendsItem.md#position)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22859

type of element

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`type`](IBaseDataforseoTrendsItem.md#type)
