[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo

# Interface: IDataforseoLabsGoogleRelatedKeywordsLiveResultInfo

Defined in: main.ts:94202

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelatedKeywordsLiveItem`](../classes/DataforseoLabsRelatedKeywordsLiveItem.md)[]

Defined in: main.ts:94219

contains keywords and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:94217

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:94213

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:94211

location code in a POST array

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:94204

search engine type

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:94206

keyword in a POST array

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

Defined in: main.ts:94209

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:94215

total amount of results in our database relevant to your request
