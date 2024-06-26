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

main.ts:83955

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:83947

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:83943

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:83941

***

### offset?

> **`optional`** **offset**: `number`

current offset value

#### Source

main.ts:83949

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Source

main.ts:83953

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:83937

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Source

main.ts:83939

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of results in our database relevant to your request

#### Source

main.ts:83945
