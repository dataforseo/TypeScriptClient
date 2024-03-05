[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkRanksLiveResultInfo

# Class: BacklinksBulkRanksLiveResultInfo

## Implements

- [`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkRanksLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksBulkRanksLiveResultInfo.md#items)
- [items\_count](BacklinksBulkRanksLiveResultInfo.md#items_count)

### Methods

- [init](BacklinksBulkRanksLiveResultInfo.md#init)
- [toJSON](BacklinksBulkRanksLiveResultInfo.md#tojson)
- [fromJS](BacklinksBulkRanksLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkRanksLiveResultInfo**(`data?`): [`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkRanksLiveResultInfo`](../interfaces/IBacklinksBulkRanksLiveResultInfo.md) |

#### Returns

[`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Defined in

[main.ts:139471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139471)

## Properties

### items

• `Optional` **items**: [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksBulkRanksLiveResultInfo](../interfaces/IBacklinksBulkRanksLiveResultInfo.md).[items](../interfaces/IBacklinksBulkRanksLiveResultInfo.md#items)

#### Defined in

[main.ts:139467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139467)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksBulkRanksLiveResultInfo](../interfaces/IBacklinksBulkRanksLiveResultInfo.md).[items_count](../interfaces/IBacklinksBulkRanksLiveResultInfo.md#items_count)

#### Defined in

[main.ts:139465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139465)

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

[main.ts:139480](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139480)

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

[main.ts:139502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139502)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkRanksLiveResultInfo`](BacklinksBulkRanksLiveResultInfo.md)

#### Defined in

[main.ts:139495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139495)
