[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBulkSpamScoreLiveResultInfo

# Class: BacklinksBulkSpamScoreLiveResultInfo

## Implements

- [`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBulkSpamScoreLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksBulkSpamScoreLiveResultInfo.md#items)
- [items\_count](BacklinksBulkSpamScoreLiveResultInfo.md#items_count)

### Methods

- [init](BacklinksBulkSpamScoreLiveResultInfo.md#init)
- [toJSON](BacklinksBulkSpamScoreLiveResultInfo.md#tojson)
- [fromJS](BacklinksBulkSpamScoreLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBulkSpamScoreLiveResultInfo**(`data?`): [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md) |

#### Returns

[`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Defined in

[main.ts:140151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140151)

## Properties

### items

• `Optional` **items**: [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksBulkSpamScoreLiveResultInfo](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[items](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items)

#### Defined in

[main.ts:140147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140147)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksBulkSpamScoreLiveResultInfo](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[items_count](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items_count)

#### Defined in

[main.ts:140145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140145)

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

[main.ts:140160](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140160)

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

[main.ts:140182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140182)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBulkSpamScoreLiveResultInfo`](BacklinksBulkSpamScoreLiveResultInfo.md)

#### Defined in

[main.ts:140175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140175)
