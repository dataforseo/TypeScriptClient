[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

Defined in: main.ts:98681

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

Defined in: main.ts:98701

contains keyword ideas and related data

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:98693

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:98689

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:98687

location code in a POST array

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:98695

current offset value

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:98699

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:98683

search engine type

***

### seed\_categories?

> `optional` **seed\_categories**: `number`[]

Defined in: main.ts:98685

categories in a POST array

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:98691

the total amount of results in our database relevant to your request
