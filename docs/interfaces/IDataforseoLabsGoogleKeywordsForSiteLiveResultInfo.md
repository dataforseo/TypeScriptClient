**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Source

main.ts:84478

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:84470

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:84466

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:84464

***

### offset?

> **`optional`** **offset**: `number`

current offset value

#### Source

main.ts:84472

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Source

main.ts:84476

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:84460

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Source

main.ts:84462

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Source

main.ts:84468
