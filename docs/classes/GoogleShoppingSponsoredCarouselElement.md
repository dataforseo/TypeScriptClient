[Documentation](../README.md) / [Exports](../modules.md) / GoogleShoppingSponsoredCarouselElement

# Class: GoogleShoppingSponsoredCarouselElement

## Implements

- [`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleShoppingSponsoredCarouselElement.md#constructor)

### Properties

- [currency](GoogleShoppingSponsoredCarouselElement.md#currency)
- [delivery\_info](GoogleShoppingSponsoredCarouselElement.md#delivery_info)
- [price](GoogleShoppingSponsoredCarouselElement.md#price)
- [product\_images](GoogleShoppingSponsoredCarouselElement.md#product_images)
- [product\_rating](GoogleShoppingSponsoredCarouselElement.md#product_rating)
- [seller](GoogleShoppingSponsoredCarouselElement.md#seller)
- [shop\_ad\_aclk](GoogleShoppingSponsoredCarouselElement.md#shop_ad_aclk)
- [tags](GoogleShoppingSponsoredCarouselElement.md#tags)
- [title](GoogleShoppingSponsoredCarouselElement.md#title)
- [type](GoogleShoppingSponsoredCarouselElement.md#type)
- [xpath](GoogleShoppingSponsoredCarouselElement.md#xpath)

### Methods

- [init](GoogleShoppingSponsoredCarouselElement.md#init)
- [toJSON](GoogleShoppingSponsoredCarouselElement.md#tojson)
- [fromJS](GoogleShoppingSponsoredCarouselElement.md#fromjs)

## Constructors

### constructor

• **new GoogleShoppingSponsoredCarouselElement**(`data?`): [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md) |

#### Returns

[`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

#### Defined in

main.ts:170503

## Properties

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[currency](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#currency)

#### Defined in

main.ts:170487

___

### delivery\_info

• `Optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[delivery_info](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#delivery_info)

#### Defined in

main.ts:170499

___

### price

• `Optional` **price**: `number`

product price
example:
384.99

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[price](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#price)

#### Defined in

main.ts:170483

___

### product\_images

• `Optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[product_images](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#product_images)

#### Defined in

main.ts:170493

___

### product\_rating

• `Optional` **product\_rating**: [`RatingElement`](RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[product_rating](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#product_rating)

#### Defined in

main.ts:170490

___

### seller

• `Optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[seller](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#seller)

#### Defined in

main.ts:170479

___

### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[shop_ad_aclk](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#shop_ad_aclk)

#### Defined in

main.ts:170496

___

### tags

• `Optional` **tags**: `string`[]

tags assigned to the product

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[tags](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#tags)

#### Defined in

main.ts:170476

___

### title

• `Optional` **title**: `string`

product title

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[title](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#title)

#### Defined in

main.ts:170474

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[type](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#type)

#### Defined in

main.ts:170470

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Implementation of

[IGoogleShoppingSponsoredCarouselElement](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[xpath](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#xpath)

#### Defined in

main.ts:170472

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

main.ts:170512

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

main.ts:170547

___

### fromJS

▸ **fromJS**(`data`): [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

#### Defined in

main.ts:170540
