[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingSerpCompetitorsLiveResultInfo

# Interface: IDataforseoLabsBingSerpCompetitorsLiveResultInfo

Defined in: main.ts:120298

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSerpCompetitorsLiveItem`](../classes/DataforseoLabsSerpCompetitorsLiveItem.md)[]

Defined in: main.ts:120315

contains detected SERP competitors and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:120313

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:120309

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:120306

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:120300

search engine type

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

Defined in: main.ts:120303

keywords specified in the request
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:120311

the total amount of results in our database relevant to your request
