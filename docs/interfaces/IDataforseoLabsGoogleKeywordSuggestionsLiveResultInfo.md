[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

Defined in: main.ts:94748

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

Defined in: main.ts:94771

contains keywords and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:94763

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:94759

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:94757

location code in a POST array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:94765

current offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:94769

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:94750

search engine type

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

Defined in: main.ts:94752

keyword in a POST array

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: `object`

Defined in: main.ts:94755

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Index Signature

\[`key`: `string`\]: `string`

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:94761

total amount of results in our database relevant to your request
