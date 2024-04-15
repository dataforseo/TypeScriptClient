**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleTrendsGraphElementItem

# Interface: IGoogleTrendsGraphElementItem

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### averages?

> **`optional`** **averages**: `number`[]

keyword popularity values averaged over the whole time range

#### Source

main.ts:123109

***

### data?

> **`optional`** **data**: [`TrendsGraphDataInfo`](../classes/TrendsGraphDataInfo.md)[]

Google Trends data for the specified parameters

#### Source

main.ts:123107

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array

#### Source

main.ts:123105

***

### position?

> **`optional`** **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Source

main.ts:123100

***

### title?

> **`optional`** **title**: `string`

title of the element in Google Trends

#### Source

main.ts:123102
