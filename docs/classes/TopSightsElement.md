[Documentation](../README.md) / [Exports](../modules.md) / TopSightsElement

# Class: TopSightsElement

## Implements

- [`ITopSightsElement`](../interfaces/ITopSightsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TopSightsElement.md#constructor)

### Properties

- [description](TopSightsElement.md#description)
- [rating](TopSightsElement.md#rating)
- [title](TopSightsElement.md#title)
- [type](TopSightsElement.md#type)
- [url](TopSightsElement.md#url)

### Methods

- [init](TopSightsElement.md#init)
- [toJSON](TopSightsElement.md#tojson)
- [fromJS](TopSightsElement.md#fromjs)

## Constructors

### constructor

• **new TopSightsElement**(`data?`): [`TopSightsElement`](TopSightsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITopSightsElement`](../interfaces/ITopSightsElement.md) |

#### Returns

[`TopSightsElement`](TopSightsElement.md)

#### Defined in

main.ts:31769

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[ITopSightsElement](../interfaces/ITopSightsElement.md).[description](../interfaces/ITopSightsElement.md#description)

#### Defined in

main.ts:31762

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[ITopSightsElement](../interfaces/ITopSightsElement.md).[rating](../interfaces/ITopSightsElement.md#rating)

#### Defined in

main.ts:31765

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ITopSightsElement](../interfaces/ITopSightsElement.md).[title](../interfaces/ITopSightsElement.md#title)

#### Defined in

main.ts:31758

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ITopSightsElement](../interfaces/ITopSightsElement.md).[type](../interfaces/ITopSightsElement.md#type)

#### Defined in

main.ts:31756

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ITopSightsElement](../interfaces/ITopSightsElement.md).[url](../interfaces/ITopSightsElement.md#url)

#### Defined in

main.ts:31760

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

main.ts:31778

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

main.ts:31799

___

### fromJS

▸ **fromJS**(`data`): [`TopSightsElement`](TopSightsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TopSightsElement`](TopSightsElement.md)

#### Defined in

main.ts:31792
