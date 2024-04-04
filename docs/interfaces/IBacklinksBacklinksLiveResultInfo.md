**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksBacklinksLiveResultInfo

# Interface: IBacklinksBacklinksLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### custom\_mode?

> **`optional`** **custom\_mode**: `Object`

custom mode specified in a POST array

#### Index signature

 \[`key`: `string`\]: `any`

#### Source

main.ts:136953

***

### items?

> **`optional`** **items**: [`BacklinksBacklinksLiveItem`](../classes/BacklinksBacklinksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Source

main.ts:136959

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:136957

***

### mode?

> **`optional`** **mode**: `string`

mode specified in a POST array

#### Source

main.ts:136951

***

### search\_after\_token?

> **`optional`** **search\_after\_token**: `string`

token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task

#### Source

main.ts:136963

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Source

main.ts:136949

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results relevant the request

#### Source

main.ts:136955
