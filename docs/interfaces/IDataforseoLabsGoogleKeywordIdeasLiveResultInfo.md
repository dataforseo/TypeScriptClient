[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

Defined in: main.ts:95354

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

Defined in: main.ts:95375

contains keyword ideas and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:95367

number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95363

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:95361

location code in a POST array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:95369

current offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:95373

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:95356

search engine type

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

Defined in: main.ts:95359

keywords in a POST array
keywords are returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:95365

total number of results relevant to your request in our database
