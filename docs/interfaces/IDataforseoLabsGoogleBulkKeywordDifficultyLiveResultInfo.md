[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

# Interface: IDataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo

Defined in: main.ts:96275

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`DataforseoLabsBulkKeywordDifficultyLiveItem`](../classes/DataforseoLabsBulkKeywordDifficultyLiveItem.md)[]

Defined in: main.ts:96289

contains keywords and related keyword difficulty scores

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:96287

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:96283

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:96280

location code in a POST array
if there is no data, then the value is null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:96277

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:96285

total amount of results in our database relevant to your request
