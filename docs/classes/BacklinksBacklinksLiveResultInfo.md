[Documentation](../README.md) / [Exports](../modules.md) / BacklinksBacklinksLiveResultInfo

# Class: BacklinksBacklinksLiveResultInfo

## Implements

- [`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBacklinksLiveResultInfo.md#constructor)

### Properties

- [custom\_mode](BacklinksBacklinksLiveResultInfo.md#custom_mode)
- [items](BacklinksBacklinksLiveResultInfo.md#items)
- [items\_count](BacklinksBacklinksLiveResultInfo.md#items_count)
- [mode](BacklinksBacklinksLiveResultInfo.md#mode)
- [search\_after\_token](BacklinksBacklinksLiveResultInfo.md#search_after_token)
- [target](BacklinksBacklinksLiveResultInfo.md#target)
- [total\_count](BacklinksBacklinksLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksBacklinksLiveResultInfo.md#init)
- [toJSON](BacklinksBacklinksLiveResultInfo.md#tojson)
- [fromJS](BacklinksBacklinksLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBacklinksLiveResultInfo**(`data?`): [`BacklinksBacklinksLiveResultInfo`](BacklinksBacklinksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md) |

#### Returns

[`BacklinksBacklinksLiveResultInfo`](BacklinksBacklinksLiveResultInfo.md)

#### Defined in

main.ts:136870

## Properties

### custom\_mode

• `Optional` **custom\_mode**: `Object`

custom mode specified in a POST array

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IBacklinksBacklinksLiveResultInfo](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[custom_mode](../interfaces/IBacklinksBacklinksLiveResultInfo.md#custom_mode)

#### Defined in

main.ts:136856

___

### items

• `Optional` **items**: [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksBacklinksLiveResultInfo](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[items](../interfaces/IBacklinksBacklinksLiveResultInfo.md#items)

#### Defined in

main.ts:136862

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksBacklinksLiveResultInfo](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[items_count](../interfaces/IBacklinksBacklinksLiveResultInfo.md#items_count)

#### Defined in

main.ts:136860

___

### mode

• `Optional` **mode**: `string`

mode specified in a POST array

#### Implementation of

[IBacklinksBacklinksLiveResultInfo](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[mode](../interfaces/IBacklinksBacklinksLiveResultInfo.md#mode)

#### Defined in

main.ts:136854

___

### search\_after\_token

• `Optional` **search\_after\_token**: `string`

token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task

#### Implementation of

[IBacklinksBacklinksLiveResultInfo](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[search_after_token](../interfaces/IBacklinksBacklinksLiveResultInfo.md#search_after_token)

#### Defined in

main.ts:136866

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Implementation of

[IBacklinksBacklinksLiveResultInfo](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[target](../interfaces/IBacklinksBacklinksLiveResultInfo.md#target)

#### Defined in

main.ts:136852

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results relevant the request

#### Implementation of

[IBacklinksBacklinksLiveResultInfo](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[total_count](../interfaces/IBacklinksBacklinksLiveResultInfo.md#total_count)

#### Defined in

main.ts:136858

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:136879

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:136912

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBacklinksLiveResultInfo`](BacklinksBacklinksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBacklinksLiveResultInfo`](BacklinksBacklinksLiveResultInfo.md)

#### Defined in

main.ts:136905
