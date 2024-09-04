[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBuyOnGoogleMerchantSerpElementItem

# Interface: IBuyOnGoogleMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### base\_price?

> `optional` **base\_price**: `number`

product price without tax and shipping

#### Defined in

main.ts:180606

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:180617

***

### details?

> `optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Defined in

main.ts:180604

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:180597

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:180593

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:180589

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:180586

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Defined in

main.ts:180623

***

### seller\_name?

> `optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:180620

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

product shipping price

#### Defined in

main.ts:180611

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

#### Defined in

main.ts:180627

***

### tax?

> `optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Defined in

main.ts:180609

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:180599

***

### total\_price?

> `optional` **total\_price**: `number`

product price including tax and shipping

#### Defined in

main.ts:180613

***

### url?

> `optional` **url**: `string`

Google Shopping URL forwarding to the product page

#### Defined in

main.ts:180601

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:180595
