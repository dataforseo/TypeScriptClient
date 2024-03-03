[Documentation](../README.md) / [Exports](../modules.md) / IGoogleShoppingSponsoredCarouselElement

# Interface: IGoogleShoppingSponsoredCarouselElement

## Implemented by

- [`GoogleShoppingSponsoredCarouselElement`](../classes/GoogleShoppingSponsoredCarouselElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [currency](IGoogleShoppingSponsoredCarouselElement.md#currency)
- [delivery\_info](IGoogleShoppingSponsoredCarouselElement.md#delivery_info)
- [price](IGoogleShoppingSponsoredCarouselElement.md#price)
- [product\_images](IGoogleShoppingSponsoredCarouselElement.md#product_images)
- [product\_rating](IGoogleShoppingSponsoredCarouselElement.md#product_rating)
- [seller](IGoogleShoppingSponsoredCarouselElement.md#seller)
- [shop\_ad\_aclk](IGoogleShoppingSponsoredCarouselElement.md#shop_ad_aclk)
- [tags](IGoogleShoppingSponsoredCarouselElement.md#tags)
- [title](IGoogleShoppingSponsoredCarouselElement.md#title)
- [type](IGoogleShoppingSponsoredCarouselElement.md#type)
- [xpath](IGoogleShoppingSponsoredCarouselElement.md#xpath)

## Properties

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:165288

___

### delivery\_info

• `Optional` **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:165300

___

### price

• `Optional` **price**: `number`

product price
example:
384.99

#### Defined in

main.ts:165284

___

### product\_images

• `Optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Defined in

main.ts:165294

___

### product\_rating

• `Optional` **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Defined in

main.ts:165291

___

### seller

• `Optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:165280

___

### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

main.ts:165297

___

### tags

• `Optional` **tags**: `string`[]

tags assigned to the product

#### Defined in

main.ts:165277

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

main.ts:165275

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:165271

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:165273
