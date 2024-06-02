**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo

# Interface: IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](../classes/DataforseoLabsSerpCompetitorsLiveItem.md)[]

contains detected SERP competitors and related data

#### Source

main.ts:91551

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:91549

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:91545

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:91542

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:91536

***

### seed\_keywords?

> **`optional`** **seed\_keywords**: `string`[]

keywords specified in the request
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Source

main.ts:91539

***

### total\_count?

> **`optional`** **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Source

main.ts:91547
