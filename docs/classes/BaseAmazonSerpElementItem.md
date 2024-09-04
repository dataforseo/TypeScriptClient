[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseAmazonSerpElementItem

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

## Constructors

### new BaseAmazonSerpElementItem()

> **new BaseAmazonSerpElementItem**(`data`?): [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md)

#### Returns

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Defined in

main.ts:22317

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:22315

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22311

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md).[`rank_group`](../interfaces/IBaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:22308

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md).[`type`](../interfaces/IBaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:22305

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IBaseAmazonSerpElementItem`](../interfaces/IBaseAmazonSerpElementItem.md).[`xpath`](../interfaces/IBaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:22313

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22327

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22388

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

#### Defined in

main.ts:22336
