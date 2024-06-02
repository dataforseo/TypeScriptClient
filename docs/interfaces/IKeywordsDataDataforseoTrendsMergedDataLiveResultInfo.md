**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsMergedDataLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:128434

***

### items?

> **`optional`** **items**: [`BaseDataforseoTrendsItem`](../classes/BaseDataforseoTrendsItem.md)[]

contains keyword popularity and related data

#### Source

main.ts:128438

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:128436

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords in a POST array

#### Source

main.ts:128421

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:128429

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:128426

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:128423
