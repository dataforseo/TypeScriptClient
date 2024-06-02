**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo

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

main.ts:127267

***

### items?

> **`optional`** **items**: [`BaseDataforseoTrendsItem`](../classes/BaseDataforseoTrendsItem.md)[]

keyword popularity values per location
values in this array represent percentages relative to the maximum value within each region

#### Source

main.ts:127272

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:127269

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords in a POST array

#### Source

main.ts:127254

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:127262

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:127259

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:127256
