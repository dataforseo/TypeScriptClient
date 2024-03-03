[Documentation](../README.md) / [Exports](../modules.md) / Groups

# Class: Groups

## Implements

- [`IGroups`](../interfaces/IGroups.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Groups.md#constructor)

### Properties

- [categories](Groups.md#categories)
- [id](Groups.md#id)
- [title](Groups.md#title)

### Methods

- [init](Groups.md#init)
- [toJSON](Groups.md#tojson)
- [fromJS](Groups.md#fromjs)

## Constructors

### constructor

• **new Groups**(`data?`): [`Groups`](Groups.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGroups`](../interfaces/IGroups.md) |

#### Returns

[`Groups`](Groups.md)

#### Defined in

main.ts:72342

## Properties

### categories

• `Optional` **categories**: [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)[]

technology categories in this group

#### Implementation of

[IGroups](../interfaces/IGroups.md).[categories](../interfaces/IGroups.md#categories)

#### Defined in

main.ts:72338

___

### id

• `Optional` **id**: `string`

id of the technology group
example:
marketing, sales

#### Implementation of

[IGroups](../interfaces/IGroups.md).[id](../interfaces/IGroups.md#id)

#### Defined in

main.ts:72334

___

### title

• `Optional` **title**: `string`

title of the technology group

#### Implementation of

[IGroups](../interfaces/IGroups.md).[title](../interfaces/IGroups.md#title)

#### Defined in

main.ts:72336

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

main.ts:72351

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

main.ts:72374

___

### fromJS

▸ **fromJS**(`data`): [`Groups`](Groups.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Groups`](Groups.md)

#### Defined in

main.ts:72367
