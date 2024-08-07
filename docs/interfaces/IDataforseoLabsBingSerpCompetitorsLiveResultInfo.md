**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsBingSerpCompetitorsLiveResultInfo

# Interface: IDataforseoLabsBingSerpCompetitorsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](../classes/DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Source

main.ts:113012

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:113010

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:113006

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:113003

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:112997

***

### seed\_keywords?

> **`optional`** **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Source

main.ts:113000

***

### total\_count?

> **`optional`** **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Source

main.ts:113008
