**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordIdeasLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Source

main.ts:84146

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of results returned in the items array

#### Source

main.ts:84138

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:84134

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:84132

***

### offset?

> **`optional`** **offset**: `number`

current offset value

#### Source

main.ts:84140

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Source

main.ts:84144

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:84127

***

### seed\_keywords?

> **`optional`** **seed\_keywords**: `string`[]

keywords in a POST array
keywords are returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Source

main.ts:84130

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results relevant to your request in our database

#### Source

main.ts:84136
