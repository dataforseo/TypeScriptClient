[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleShoppingSponsoredCarouselElement

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

main.ts:174928

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:174940

***

### price?

> `optional` **price**: `number`

product price
example:
384.99

#### Defined in

main.ts:174924

***

### product\_images?

> `optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Defined in

main.ts:174934

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Defined in

main.ts:174931

***

### seller?

> `optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:174920

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

main.ts:174937

***

### tags?

> `optional` **tags**: `string`[]

tags assigned to the product

#### Defined in

main.ts:174917

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:174915

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:174911

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:174913
