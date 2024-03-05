[dataforseo-client](../README.md) / [Exports](../modules.md) / PopularProductsElement

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

[main.ts:31995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31995)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[description](../interfaces/IPopularProductsElement.md#description)

#### Defined in

[main.ts:31986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31986)

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

price of booking a place for the specified dates of stay

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[price](../interfaces/IPopularProductsElement.md#price)

#### Defined in

[main.ts:31988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31988)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[rating](../interfaces/IPopularProductsElement.md#rating)

#### Defined in

[main.ts:31991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31991)

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[title](../interfaces/IPopularProductsElement.md#title)

#### Defined in

[main.ts:31984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31984)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IPopularProductsElement](../interfaces/IPopularProductsElement.md).[type](../interfaces/IPopularProductsElement.md#type)

#### Defined in

[main.ts:31982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31982)

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

[main.ts:32004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32004)

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

[main.ts:32025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32025)

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

[main.ts:32018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32018)
