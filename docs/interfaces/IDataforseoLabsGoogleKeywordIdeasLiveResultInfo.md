[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

Defined in: main.ts:95328

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

Defined in: main.ts:95349

contains keyword ideas and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:95341

number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:95337

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:95335

location code in a POST array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:95343

current offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:95347

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:95330

search engine type

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

Defined in: main.ts:95333

keywords in a POST array
keywords are returned with decoded %## (plus character ‘+’ will be decoded to a space character)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:95339

total number of results relevant to your request in our database
