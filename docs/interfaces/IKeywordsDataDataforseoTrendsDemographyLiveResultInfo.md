**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataDataforseoTrendsDemographyLiveResultInfo

# Interface: IKeywordsDataDataforseoTrendsDemographyLiveResultInfo

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

main.ts:129124

***

### items?

> **`optional`** **items**: [`DataforseoTrendsDemographyInfo`](../classes/DataforseoTrendsDemographyInfo.md)[]

contains keyword popularity and related data

#### Source

main.ts:129128

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:129126

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords in a POST array

#### Source

main.ts:129111

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:129119

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:129116

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:129113
