**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleTrendsExploreLiveResultInfo

# Interface: IKeywordsDataGoogleTrendsExploreLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to the Google Trends results
you can use it to make sure that we provided accurate results

#### Source

main.ts:124108

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:124113

***

### items?

> **`optional`** **items**: [`BaseGoogleTrendsItem`](../classes/BaseGoogleTrendsItem.md)[]

items on the Google Trends page

#### Source

main.ts:124117

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:124115

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords in a POST array

#### Source

main.ts:124097

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:124105

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:124102

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:124099
