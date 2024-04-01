[Documentation](../README.md) / [Exports](../modules.md) / PopularProductsElement

# Class: PopularProductsElement

## Implements

- [`IPopularProductsElement`](../interfaces/IPopularProductsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PopularProductsElement.md#constructor)

### Properties

- [description](PopularProductsElement.md#description)
- [price](PopularProductsElement.md#price)
- [rating](PopularProductsElement.md#rating)
- [title](PopularProductsElement.md#title)
- [type](PopularProductsElement.md#type)

### Methods

- [init](PopularProductsElement.md#init)
- [toJSON](PopularProductsElement.md#tojson)
- [fromJS](PopularProductsElement.md#fromjs)

## Constructors

### constructor

• **new PopularProductsElement**(`data?`): [`PopularProductsElement`](PopularProductsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPopularProductsElement`](../interfaces/IPopularProductsElement.md) |

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)

#### Defined in

main.ts:32864

## Properties

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[description](../interfaces/IPopularProductsElement.md#description)

#### Defined in

main.ts:32855

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[price](../interfaces/IPopularProductsElement.md#price)

#### Defined in

main.ts:32857

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[rating](../interfaces/IPopularProductsElement.md#rating)

#### Defined in

main.ts:32860

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[title](../interfaces/IPopularProductsElement.md#title)

#### Defined in

main.ts:32853

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[type](../interfaces/IPopularProductsElement.md#type)

#### Defined in

main.ts:32851

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

main.ts:32873

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

main.ts:32894

___

### fromJS

▸ **fromJS**(`data`): [`PopularProductsElement`](PopularProductsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)

#### Defined in

main.ts:32887
