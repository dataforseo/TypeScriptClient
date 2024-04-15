**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordSuggestionsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keywords and related data

#### Source

main.ts:83456

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:83448

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:83444

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:83442

***

### offset?

> **`optional`** **offset**: `number`

current offset value

#### Source

main.ts:83450

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Source

main.ts:83454

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:83435

***

### seed\_keyword?

> **`optional`** **seed\_keyword**: `string`

keyword in a POST array

#### Source

main.ts:83437

***

### seed\_keyword\_data?

> **`optional`** **seed\_keyword\_data**: `Object`

keyword data for the seed keyword
fields in this object are identical to those of the items array

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:83440

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:83446
