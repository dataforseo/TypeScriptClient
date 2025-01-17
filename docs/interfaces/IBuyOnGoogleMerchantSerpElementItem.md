[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBuyOnGoogleMerchantSerpElementItem

# Interface: IBuyOnGoogleMerchantSerpElementItem

Defined in: main.ts:188201

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### base\_price?

> `optional` **base\_price**: `number`

Defined in: main.ts:188214

product price without tax and shipping

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:188225

currency in the ISO format
example:
USD

***

### details?

> `optional` **details**: `string`

Defined in: main.ts:188212

details and special offers
if there are no details, the value will be null

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:188205

domain in SERP

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21813

alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`position`](IBaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21809

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_absolute`](IBaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21806

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_group`](IBaseMerchantSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

Defined in: main.ts:188231

shop rating
the shop popularity rate based on product reviews

***

### seller\_name?

> `optional` **seller\_name**: `string`

Defined in: main.ts:188228

name of the seller
the name of the company that placed a corresponding product on Google Shopping

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

Defined in: main.ts:188219

product shipping price

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:188235

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

***

### tax?

> `optional` **tax**: `number`

Defined in: main.ts:188217

the amount of tax
tax is specified as the actual amount of money, not as the percentage

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:188207

product title

***

### total\_price?

> `optional` **total\_price**: `number`

Defined in: main.ts:188221

product price including tax and shipping

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21803

type of element

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`type`](IBaseMerchantSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:188209

Google Shopping URL forwarding to the product page

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:188203

XPath of the element
