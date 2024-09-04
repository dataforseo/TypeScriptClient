[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Defined in

main.ts:88882

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:88874

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:88870

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:88868

***

### offset?

> `optional` **offset**: `number`

current offset value

#### Defined in

main.ts:88876

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

main.ts:88880

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:88864

***

### seed\_categories?

> `optional` **seed\_categories**: `number`[]

categories in a POST array

#### Defined in

main.ts:88866

***

### total\_count?

> `optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Defined in

main.ts:88872
