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

main.ts:176413

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:176424

***

### details?

> `optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Defined in

main.ts:176411

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:176404

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`position`](IBaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21135

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_absolute`](IBaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21131

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_group`](IBaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21128

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Defined in

main.ts:176430

***

### seller\_name?

> `optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:176427

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

product shipping price

#### Defined in

main.ts:176418

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

#### Defined in

main.ts:176434

***

### tax?

> `optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Defined in

main.ts:176416

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:176406

***

### total\_price?

> `optional` **total\_price**: `number`

product price including tax and shipping

#### Defined in

main.ts:176420

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`type`](IBaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21125

***

### url?

> `optional` **url**: `string`

Google Shopping URL forwarding to the product page

#### Defined in

main.ts:176408

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:176402
