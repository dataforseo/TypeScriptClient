[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IShopsListMerchantSerpElementItem

# Interface: IShopsListMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### base\_price?

> `optional` **base\_price**: `number`

product price without tax and shipping

#### Defined in

main.ts:176238

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:176249

***

### details?

> `optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Defined in

main.ts:176236

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:176228

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`position`](IBaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21130

***

### product\_annotation?

> `optional` **product\_annotation**: `string`

data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP

#### Defined in

main.ts:176265

***

### product\_condition?

> `optional` **product\_condition**: `string`

indicated condition of the product
possible values: Used, Refurbished, New, null

#### Defined in

main.ts:176261

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_absolute`](IBaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21126

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`rank_group`](IBaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21123

***

### rating?

> `optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Defined in

main.ts:176255

***

### seller\_name?

> `optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:176252

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

product shipping price

#### Defined in

main.ts:176243

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

main.ts:176258

***

### tax?

> `optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Defined in

main.ts:176241

***

### title?

> `optional` **title**: `string`

product title

#### Defined in

main.ts:176230

***

### total\_price?

> `optional` **total\_price**: `number`

product price including tax and shipping

#### Defined in

main.ts:176245

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md).[`type`](IBaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21120

***

### url?

> `optional` **url**: `string`

Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint

#### Defined in

main.ts:176233

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:176226
