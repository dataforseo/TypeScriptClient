**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleShoppingSponsoredCarouselElement

# Interface: IGoogleShoppingSponsoredCarouselElement

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Source

main.ts:172959

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Source

main.ts:172971

***

### price?

> **`optional`** **price**: `number`

product price
example:
384.99

#### Source

main.ts:172955

***

### product\_images?

> **`optional`** **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Source

main.ts:172965

***

### product\_rating?

> **`optional`** **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Source

main.ts:172962

***

### seller?

> **`optional`** **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Source

main.ts:172951

***

### shop\_ad\_aclk?

> **`optional`** **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Source

main.ts:172968

***

### tags?

> **`optional`** **tags**: `string`[]

tags assigned to the product

#### Source

main.ts:172948

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:172946

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:172942

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:172944
