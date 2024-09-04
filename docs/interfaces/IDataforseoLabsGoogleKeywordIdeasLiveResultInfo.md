[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Defined in

main.ts:86862

***

### items\_count?

> `optional` **items\_count**: `number`

number of results returned in the items array

#### Defined in

main.ts:86854

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:86850

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:86848

***

### offset?

> `optional` **offset**: `number`

current offset value

#### Defined in

main.ts:86856

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

main.ts:86860

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:86843

***

### seed\_keywords?

> `optional` **seed\_keywords**: `string`[]

keywords in a POST array
keywords are returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:86846

***

### total\_count?

> `optional` **total\_count**: `number`

total number of results relevant to your request in our database

#### Defined in

main.ts:86852
