[**Documentation**](../README.md)

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

main.ts:135939

***

### data?

> `optional` **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

DataForSEO Trends data for the specified parameters

#### Defined in

main.ts:135937

***

### keywords?

> `optional` **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`keywords`](IBaseDataforseoTrendsItem.md#keywords)

#### Defined in

main.ts:22865

***

### position?

> `optional` **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`position`](IBaseDataforseoTrendsItem.md#position)

#### Defined in

main.ts:22862

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md).[`type`](IBaseDataforseoTrendsItem.md#type)

#### Defined in

main.ts:22859
