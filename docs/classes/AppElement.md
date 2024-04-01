[Documentation](../README.md) / [Exports](../modules.md) / AppElement

# Class: AppElement

## Implements

- [`IAppElement`](../interfaces/IAppElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppElement.md#constructor)

### Properties

- [description](AppElement.md#description)
- [price](AppElement.md#price)
- [title](AppElement.md#title)
- [type](AppElement.md#type)
- [url](AppElement.md#url)

### Methods

- [init](AppElement.md#init)
- [toJSON](AppElement.md#tojson)
- [fromJS](AppElement.md#fromjs)

## Constructors

### constructor

• **new AppElement**(`data?`): [`AppElement`](AppElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppElement`](../interfaces/IAppElement.md) |

#### Returns

[`AppElement`](AppElement.md)

#### Defined in

main.ts:30409

## Properties

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[description](../interfaces/IAppElement.md#description)

#### Defined in

main.ts:30401

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[price](../interfaces/IAppElement.md#price)

#### Defined in

main.ts:30405

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[title](../interfaces/IAppElement.md#title)

#### Defined in

main.ts:30399

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[type](../interfaces/IAppElement.md#type)

#### Defined in

main.ts:30397

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IAppElement](../interfaces/IAppElement.md).[url](../interfaces/IAppElement.md#url)

#### Defined in

main.ts:30403

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

main.ts:30418

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

main.ts:30439

___

### fromJS

▸ **fromJS**(`data`): [`AppElement`](AppElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppElement`](AppElement.md)

#### Defined in

main.ts:30432
