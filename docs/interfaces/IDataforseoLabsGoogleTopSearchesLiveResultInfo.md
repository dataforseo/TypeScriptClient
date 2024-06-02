**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleTopSearchesLiveResultInfo

# Interface: IDataforseoLabsGoogleTopSearchesLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keywords and related data

#### Source

main.ts:88887

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:88879

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:88875

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:88873

***

### offset?

> **`optional`** **offset**: `number`

current offset value

#### Source

main.ts:88881

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Source

main.ts:88885

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:88871

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Source

main.ts:88877
