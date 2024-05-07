**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoTrendsGraphElementItem

# Interface: IDataforseoTrendsGraphElementItem

## Extends

- [`IBaseDataforseoTrendsItem`](IBaseDataforseoTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### averages?

> **`optional`** **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Source

main.ts:126145

***

### data?

> **`optional`** **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

DataForSEO Trends data for the specified parameters

#### Source

main.ts:126143

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array

#### Source

main.ts:126141

***

### position?

> **`optional`** **position**: `number`

the alignment of the element
can take the following values: 1, 2, 3, 4, etc.

#### Source

main.ts:126138
