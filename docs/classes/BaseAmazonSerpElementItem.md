[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BaseAmazonSerpElementItem

# Class: BaseAmazonSerpElementItem

## Extended by

- [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)
- [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)
- [`AmazonEditorialRecommendationsSerpElementItem`](AmazonEditorialRecommendationsSerpElementItem.md)
- [`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)
- [`AmazonTopRatedFromOurBrandsSerpElementItem`](AmazonTopRatedFromOurBrandsSerpElementItem.md)
- [`AmazonAmazonProductInfoSerpElementItem`](AmazonAmazonProductInfoSerpElementItem.md)
- [`AmazonAmazonSellerMainItemSerpElementItem`](AmazonAmazonSellerMainItemSerpElementItem.md)
- [`AmazonAmazonSellerItemSerpElementItem`](AmazonAmazonSellerItemSerpElementItem.md)
- [`AmazonAmazonReviewItemSerpElementItem`](AmazonAmazonReviewItemSerpElementItem.md)

## Implements

- [`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseAmazonSerpElementItem()

> **new BaseAmazonSerpElementItem**(`data`?): [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md)

#### Returns

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Defined in

main.ts:22009

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:22007

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22019

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22080

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Defined in

main.ts:22028
