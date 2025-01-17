[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleShoppingSponsoredCarouselElement

# Class: GoogleShoppingSponsoredCarouselElement

Defined in: main.ts:186598

## Implements

- [`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleShoppingSponsoredCarouselElement()

> **new GoogleShoppingSponsoredCarouselElement**(`data`?): [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

Defined in: main.ts:186633

#### Parameters

##### data?

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md)

#### Returns

[`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:186617

currency in the ISO format
example:
USD

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`currency`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#currency)

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

Defined in: main.ts:186629

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`delivery_info`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#delivery_info)

***

### price?

> `optional` **price**: `number`

Defined in: main.ts:186613

product price
example:
384.99

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`price`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#price)

***

### product\_images?

> `optional` **product\_images**: `string`[]

Defined in: main.ts:186623

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`product_images`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#product_images)

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:186620

product rating
the product popularity rate based on product reviews

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`product_rating`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#product_rating)

***

### seller?

> `optional` **seller**: `string`

Defined in: main.ts:186609

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`seller`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#seller)

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:186626

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`shop_ad_aclk`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#shop_ad_aclk)

***

### tags?

> `optional` **tags**: `string`[]

Defined in: main.ts:186606

tags assigned to the product

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`tags`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#tags)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:186604

product title

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`title`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:186600

type of element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`type`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:186602

XPath of the element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselElement`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md).[`xpath`](../interfaces/IGoogleShoppingSponsoredCarouselElement.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:186642

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:186677

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)

Defined in: main.ts:186670

#### Parameters

##### data

`any`

#### Returns

[`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)
