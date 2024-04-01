[Documentation](../README.md) / [Exports](../modules.md) / LocationChain

# Class: LocationChain

## Implements

- [`ILocationChain`](../interfaces/ILocationChain.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocationChain.md#constructor)

### Properties

- [card\_id](LocationChain.md#card_id)
- [cid](LocationChain.md#cid)
- [feature\_id](LocationChain.md#feature_id)
- [title](LocationChain.md#title)

### Methods

- [init](LocationChain.md#init)
- [toJSON](LocationChain.md#tojson)
- [fromJS](LocationChain.md#fromjs)

## Constructors

### constructor

• **new LocationChain**(`data?`): [`LocationChain`](LocationChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocationChain`](../interfaces/ILocationChain.md) |

#### Returns

[`LocationChain`](LocationChain.md)

#### Defined in

main.ts:201030

## Properties

### card\_id

• `Optional` **card\_id**: `string`

card identifier

#### Implementation of

[ILocationChain](../interfaces/ILocationChain.md).[card_id](../interfaces/ILocationChain.md#card_id)

#### Defined in

main.ts:201018

___

### cid

• `Optional` **cid**: `string`

client id
learn more about the identifier in this help center article

#### Implementation of

[ILocationChain](../interfaces/ILocationChain.md).[cid](../interfaces/ILocationChain.md#cid)

#### Defined in

main.ts:201024

___

### feature\_id

• `Optional` **feature\_id**: `string`

feature identifier
learn more about the identifier in this help center article

#### Implementation of

[ILocationChain](../interfaces/ILocationChain.md).[feature_id](../interfaces/ILocationChain.md#feature_id)

#### Defined in

main.ts:201021

___

### title

• `Optional` **title**: `string`

title of the element in the location chain

#### Implementation of

[ILocationChain](../interfaces/ILocationChain.md).[title](../interfaces/ILocationChain.md#title)

#### Defined in

main.ts:201026

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

main.ts:201039

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

main.ts:201059

___

### fromJS

▸ **fromJS**(`data`): [`LocationChain`](LocationChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocationChain`](LocationChain.md)

#### Defined in

main.ts:201052
