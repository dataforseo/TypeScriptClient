**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBuyOnGoogleMerchantSerpElementItem

# Interface: IBuyOnGoogleMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### base\_price?

> **`optional`** **base\_price**: `number`

product price without tax and shipping

#### Source

main.ts:174058

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Source

main.ts:174069

***

### details?

> **`optional`** **details**: `string`

details and special offers
if there are no details, the value will be null

#### Source

main.ts:174056

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Source

main.ts:174049

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:174045

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Source

main.ts:174041

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:174038

***

### rating?

> **`optional`** **rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Source

main.ts:174075

***

### seller\_name?

> **`optional`** **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Source

main.ts:174072

***

### shipping\_price?

> **`optional`** **shipping\_price**: `number`

product shipping price

#### Source

main.ts:174063

***

### shop\_ad\_aclk?

> **`optional`** **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

#### Source

main.ts:174079

***

### tax?

> **`optional`** **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Source

main.ts:174061

***

### title?

> **`optional`** **title**: `string`

product title

#### Source

main.ts:174051

***

### total\_price?

> **`optional`** **total\_price**: `number`

product price including tax and shipping

#### Source

main.ts:174065

***

### url?

> **`optional`** **url**: `string`

Google Shopping URL forwarding to the product page

#### Source

main.ts:174053

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:174047
