**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleTrendsMapElementItem

# Interface: IGoogleTrendsMapElementItem

## Extends

- [`IBaseGoogleTrendsItem`](IBaseGoogleTrendsItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data?

> **`optional`** **data**: [`TrendsMapDataInfo`](../classes/TrendsMapDataInfo.md)[]

Google Trends data from the corresponding item

#### Source

main.ts:124659

***

### keywords?

> **`optional`** **keywords**: `string`[]

relevant keywords
the data included in the google_trends_map element is based on the keywords listed in this array

#### Source

main.ts:124657

***

### position?

> **`optional`** **position**: `number`

the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc.

#### Source

main.ts:124652

***

### title?

> **`optional`** **title**: `string`

title of the element in Google Trends

#### Source

main.ts:124654
