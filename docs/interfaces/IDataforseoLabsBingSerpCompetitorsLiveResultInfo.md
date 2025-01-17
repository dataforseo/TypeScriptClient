[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingSerpCompetitorsLiveResultInfo

# Interface: IDataforseoLabsBingSerpCompetitorsLiveResultInfo

Defined in: main.ts:120194

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](../classes/DataforseoLabsSerpCompetitorsLiveItem.md)[]

Defined in: main.ts:120211

contains detected SERP competitors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:120209

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:120205

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:120202

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:120196

search engine type

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

Defined in: main.ts:120199

keywords specified in the request
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:120207

the total amount of results in our database relevant to your request
