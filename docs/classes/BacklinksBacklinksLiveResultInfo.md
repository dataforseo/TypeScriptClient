[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBacklinksLiveResultInfo

# Class: BacklinksBacklinksLiveResultInfo

## Implements

- [`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBacklinksLiveResultInfo()

> **new BacklinksBacklinksLiveResultInfo**(`data`?): [`BacklinksBacklinksLiveResultInfo`](BacklinksBacklinksLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md)

#### Returns

[`BacklinksBacklinksLiveResultInfo`](BacklinksBacklinksLiveResultInfo.md)

#### Defined in

main.ts:141069

## Properties

### custom\_mode?

> `optional` **custom\_mode**: `object`

custom mode specified in a POST array

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`custom_mode`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#custom_mode)

#### Defined in

main.ts:141055

***

### items?

> `optional` **items**: [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#items)

#### Defined in

main.ts:141061

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#items_count)

#### Defined in

main.ts:141059

***

### mode?

> `optional` **mode**: `string`

mode specified in a POST array

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`mode`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#mode)

#### Defined in

main.ts:141053

***

### search\_after\_token?

> `optional` **search\_after\_token**: `string`

token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`search_after_token`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#search_after_token)

#### Defined in

main.ts:141065

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`target`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#target)

#### Defined in

main.ts:141051

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results relevant the request

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#total_count)

#### Defined in

main.ts:141057

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:141078

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:141111

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBacklinksLiveResultInfo`](BacklinksBacklinksLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBacklinksLiveResultInfo`](BacklinksBacklinksLiveResultInfo.md)

#### Defined in

main.ts:141104
