[Documentation](../README.md) / [Exports](../modules.md) / BaseAmazonSerpElementItem

# Class: BaseAmazonSerpElementItem

## Hierarchy

- **`BaseAmazonSerpElementItem`**

  ↳ [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

  ↳ [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

  ↳ [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)

  ↳ [`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

  ↳ [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)

  ↳ [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)

  ↳ [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)

  ↳ [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)

  ↳ [`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

## Implements

- [`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseAmazonSerpElementItem.md#constructor)

### Properties

- [\_discriminator](BaseAmazonSerpElementItem.md#_discriminator)

### Methods

- [init](BaseAmazonSerpElementItem.md#init)
- [toJSON](BaseAmazonSerpElementItem.md#tojson)
- [fromJS](BaseAmazonSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new BaseAmazonSerpElementItem**(`data?`): [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md) |

#### Returns

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Defined in

main.ts:21277

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:21275

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

main.ts:21287

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

main.ts:21348

___

### fromJS

▸ **fromJS**(`data`): [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Defined in

main.ts:21296
