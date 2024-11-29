[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleShoppingSponsoredCarouselElement

# Class: GoogleShoppingSponsoredCarouselElement

## Implements

- [`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleShoppingSponsoredCarouselElement()

> **new GoogleShoppingSponsoredCarouselElement**(`data`?): [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

#### Parameters

##### data?

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md)

#### Returns

[`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

#### Defined in

main.ts:186565

## Properties

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`currency`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#currency)

#### Defined in

main.ts:186549

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`delivery_info`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#delivery_info)

#### Defined in

main.ts:186561

***

### price?

> `optional` **price**: `number`

product price
example:
384.99

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`price`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#price)

#### Defined in

main.ts:186545

***

### product\_images?

> `optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`product_images`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#product_images)

#### Defined in

main.ts:186555

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`product_rating`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#product_rating)

#### Defined in

main.ts:186552

***

### seller?

> `optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`seller`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#seller)

#### Defined in

main.ts:186541

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`shop_ad_aclk`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#shop_ad_aclk)

#### Defined in

main.ts:186558

***

### tags?

> `optional` **tags**: `string`[]

tags assigned to the product

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`tags`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#tags)

#### Defined in

main.ts:186538

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`title`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#title)

#### Defined in

main.ts:186536

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`type`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#type)

#### Defined in

main.ts:186532

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`xpath`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#xpath)

#### Defined in

main.ts:186534

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:186574

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:186609

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

#### Defined in

main.ts:186602
