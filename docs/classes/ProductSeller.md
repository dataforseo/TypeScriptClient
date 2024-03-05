[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductSeller

# Class: ProductSeller

## Implements

- [`IProductSeller`](../interfaces/IProductSeller.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductSeller.md#constructor)

### Properties

- [delivery\_info](ProductSeller.md#delivery_info)
- [price](ProductSeller.md#price)
- [seller\_rating](ProductSeller.md#seller_rating)
- [seller\_review\_count](ProductSeller.md#seller_review_count)
- [title](ProductSeller.md#title)
- [type](ProductSeller.md#type)
- [url](ProductSeller.md#url)

### Methods

- [init](ProductSeller.md#init)
- [toJSON](ProductSeller.md#tojson)
- [fromJS](ProductSeller.md#fromjs)

## Constructors

### constructor

• **new ProductSeller**(`data?`): [`ProductSeller`](ProductSeller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductSeller`](../interfaces/IProductSeller.md) |

#### Returns

[`ProductSeller`](ProductSeller.md)

#### Defined in

[main.ts:168999](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168999)

## Properties

### delivery\_info

• `Optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

delivery information
product delivery information

#### Implementation of

[IProductSeller](../interfaces/IProductSeller.md).[delivery_info](../interfaces/IProductSeller.md#delivery_info)

#### Defined in

[main.ts:168995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168995)

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

product price
product price details on the seller’s website

#### Implementation of

[IProductSeller](../interfaces/IProductSeller.md).[price](../interfaces/IProductSeller.md#price)

#### Defined in

[main.ts:168992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168992)

___

### seller\_rating

• `Optional` **seller\_rating**: [`RatingElement`](RatingElement.md)

rating of the seller

#### Implementation of

[IProductSeller](../interfaces/IProductSeller.md).[seller_rating](../interfaces/IProductSeller.md#seller_rating)

#### Defined in

[main.ts:168986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168986)

___

### seller\_review\_count

• `Optional` **seller\_review\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[IProductSeller](../interfaces/IProductSeller.md).[seller_review_count](../interfaces/IProductSeller.md#seller_review_count)

#### Defined in

[main.ts:168989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168989)

___

### title

• `Optional` **title**: `string`

product title

#### Implementation of

[IProductSeller](../interfaces/IProductSeller.md).[title](../interfaces/IProductSeller.md#title)

#### Defined in

[main.ts:168981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168981)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IProductSeller](../interfaces/IProductSeller.md).[type](../interfaces/IProductSeller.md#type)

#### Defined in

[main.ts:168979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168979)

___

### url

• `Optional` **url**: `string`

seller url
url of the page where the product is sold

#### Implementation of

[IProductSeller](../interfaces/IProductSeller.md).[url](../interfaces/IProductSeller.md#url)

#### Defined in

[main.ts:168984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168984)

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

[main.ts:169008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169008)

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

[main.ts:169031](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169031)

___

### fromJS

▸ **fromJS**(`data`): [`ProductSeller`](ProductSeller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductSeller`](ProductSeller.md)

#### Defined in

[main.ts:169024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169024)
