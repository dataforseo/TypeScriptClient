[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksReferringNetworksLiveResultInfo

# Class: BacklinksReferringNetworksLiveResultInfo

## Implements

- [`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksReferringNetworksLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksReferringNetworksLiveResultInfo.md#items)
- [items\_count](BacklinksReferringNetworksLiveResultInfo.md#items_count)
- [target](BacklinksReferringNetworksLiveResultInfo.md#target)
- [total\_count](BacklinksReferringNetworksLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksReferringNetworksLiveResultInfo.md#init)
- [toJSON](BacklinksReferringNetworksLiveResultInfo.md#tojson)
- [fromJS](BacklinksReferringNetworksLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksReferringNetworksLiveResultInfo**(`data?`): [`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md) |

#### Returns

[`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Defined in

[main.ts:135751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135751)

## Properties

### items

• `Optional` **items**: [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)[]

items array

#### Implementation of

[IBacklinksReferringNetworksLiveResultInfo](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[items](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items)

#### Defined in

[main.ts:135747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135747)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the items array

#### Implementation of

[IBacklinksReferringNetworksLiveResultInfo](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[items_count](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items_count)

#### Defined in

[main.ts:135745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135745)

___

### target

• `Optional` **target**: `string`

target in a POST array

#### Implementation of

[IBacklinksReferringNetworksLiveResultInfo](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[target](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#target)

#### Defined in

[main.ts:135741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135741)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IBacklinksReferringNetworksLiveResultInfo](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[total_count](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#total_count)

#### Defined in

[main.ts:135743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135743)

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

[main.ts:135760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135760)

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

[main.ts:135784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135784)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksReferringNetworksLiveResultInfo`](BacklinksReferringNetworksLiveResultInfo.md)

#### Defined in

[main.ts:135777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135777)
