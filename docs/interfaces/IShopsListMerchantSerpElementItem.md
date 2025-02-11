[**Documentation**](../README.md)

***

[Documentation](../README.md) / IShopsListMerchantSerpElementItem

# Interface: IShopsListMerchantSerpElementItem

Defined in: main.ts:188432

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### base\_price?

> `optional` **base\_price**: `number`

Defined in: main.ts:188446

product price without tax and shipping

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:188457

currency in the ISO format
example:
USD

***

### details?

> `optional` **details**: `string`

Defined in: main.ts:188444

details and special offers
if there are no details, the value will be null

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:188436

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

### product\_annotation?

> `optional` **product\_annotation**: `string`

Defined in: main.ts:188473

data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP

***

### product\_condition?

> `optional` **product\_condition**: `string`

Defined in: main.ts:188469

indicated condition of the product
possible values: Used, Refurbished, New, null

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

Defined in: main.ts:188463

shop rating
the shop popularity rate based on product reviews

***

### seller\_name?

> `optional` **seller\_name**: `string`

Defined in: main.ts:188460

name of the seller
the name of the company that placed a corresponding product on Google Shopping

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

Defined in: main.ts:188451

product shipping price

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

Defined in: main.ts:188466

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

***

### tax?

> `optional` **tax**: `number`

Defined in: main.ts:188449

the amount of tax
tax is specified as the actual amount of money, not as the percentage

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:188438

product title

***

### total\_price?

> `optional` **total\_price**: `number`

Defined in: main.ts:188453

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

Defined in: main.ts:188441

Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:188434

XPath of the element
