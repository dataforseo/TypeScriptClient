[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleShoppingSponsoredCarouselElement

# Interface: IGoogleShoppingSponsoredCarouselElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:186657

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:186669

***

### price?

> `optional` **price**: `number`

product price
example:
384.99

#### Defined in

main.ts:186653

***

### product\_images?

> `optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Defined in

main.ts:186663

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Defined in

main.ts:186660

***

### seller?

> `optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:186649

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

main.ts:186666

***

### tags?

> `optional` **tags**: `string`[]

tags assigned to the product

#### Defined in

main.ts:186646

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:186644

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:186640

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:186642
