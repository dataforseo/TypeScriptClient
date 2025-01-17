[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleTopSearchesLiveResultInfo

# Interface: IDataforseoLabsGoogleTopSearchesLiveResultInfo

Defined in: main.ts:99943

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

Defined in: main.ts:99961

contains keywords and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:99953

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:99949

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:99947

location code in a POST array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:99955

current offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:99959

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:99945

search engine type

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:99951

total amount of results in our database relevant to your request
