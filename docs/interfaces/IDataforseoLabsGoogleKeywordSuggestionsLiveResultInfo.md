[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keywords and related data

#### Defined in

main.ts:86284

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:86276

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:86272

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:86270

***

### offset?

> `optional` **offset**: `number`

current offset value

#### Defined in

main.ts:86278

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

main.ts:86282

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:86263

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Defined in

main.ts:86265

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: `object`

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:86268

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

main.ts:86274
