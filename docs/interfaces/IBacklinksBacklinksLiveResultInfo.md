[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBacklinksBacklinksLiveResultInfo

# Interface: IBacklinksBacklinksLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### custom\_mode?

> `optional` **custom\_mode**: `object`

custom mode specified in a POST array

#### Index Signature

 \[`key`: `string`\]: `any`

#### Defined in

main.ts:144245

***

### items?

> `optional` **items**: [`BacklinksBacklinksLiveItem`](../classes/BacklinksBacklinksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Defined in

main.ts:144251

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:144249

***

### mode?

> `optional` **mode**: `string`

mode specified in a POST array

#### Defined in

main.ts:144243

***

### search\_after\_token?

> `optional` **search\_after\_token**: `string`

token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task

#### Defined in

main.ts:144255

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Defined in

main.ts:144241

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results relevant the request

#### Defined in

main.ts:144247
