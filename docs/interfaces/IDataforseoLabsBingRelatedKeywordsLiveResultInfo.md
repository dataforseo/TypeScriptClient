[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsBingRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsBingRelatedKeywordsLiveResultInfo

Defined in: main.ts:119248

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelatedKeywordsLiveItem`](../classes/DataforseoLabsRelatedKeywordsLiveItem.md)[]

Defined in: main.ts:119265

contains keywords and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:119263

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:119259

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:119257

location code in a POST array

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:119250

search engine type

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:119252

keyword in a POST array

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

Defined in: main.ts:119255

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:119261

total amount of results in our database relevant to your request
