[Documentation](../README.md) / [Exports](../modules.md) / IBuyOnGoogleMerchantSerpElementItem

# Interface: IBuyOnGoogleMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

  ↳ **`IBuyOnGoogleMerchantSerpElementItem`**

## Implemented by

- [`BuyOnGoogleMerchantSerpElementItem`](../classes/BuyOnGoogleMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [base\_price](IBuyOnGoogleMerchantSerpElementItem.md#base_price)
- [currency](IBuyOnGoogleMerchantSerpElementItem.md#currency)
- [details](IBuyOnGoogleMerchantSerpElementItem.md#details)
- [domain](IBuyOnGoogleMerchantSerpElementItem.md#domain)
- [position](IBuyOnGoogleMerchantSerpElementItem.md#position)
- [product\_condition](IBuyOnGoogleMerchantSerpElementItem.md#product_condition)
- [rank\_absolute](IBuyOnGoogleMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IBuyOnGoogleMerchantSerpElementItem.md#rank_group)
- [rating](IBuyOnGoogleMerchantSerpElementItem.md#rating)
- [seller\_name](IBuyOnGoogleMerchantSerpElementItem.md#seller_name)
- [shipping\_price](IBuyOnGoogleMerchantSerpElementItem.md#shipping_price)
- [shop\_ad\_aclk](IBuyOnGoogleMerchantSerpElementItem.md#shop_ad_aclk)
- [tax](IBuyOnGoogleMerchantSerpElementItem.md#tax)
- [title](IBuyOnGoogleMerchantSerpElementItem.md#title)
- [total\_price](IBuyOnGoogleMerchantSerpElementItem.md#total_price)
- [url](IBuyOnGoogleMerchantSerpElementItem.md#url)
- [xpath](IBuyOnGoogleMerchantSerpElementItem.md#xpath)

## Properties

### base\_price

• `Optional` **base\_price**: `number`

product price without tax and shipping

#### Defined in

main.ts:172189

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:172200

___

### details

• `Optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Defined in

main.ts:172187

___

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:172180

___

### position

• `Optional` **position**: `string`

the alignment of the element in Google Shopping SERP
possible values:
left, right

#### Defined in

main.ts:172176

___

### product\_condition

• `Optional` **product\_condition**: `string`

indicated condition of the product
possible values: Used, Refurbished, New, null

#### Defined in

main.ts:172213

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:172172

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:172169

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Defined in

main.ts:172206

___

### seller\_name

• `Optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:172203

___

### shipping\_price

• `Optional` **shipping\_price**: `number`

product shipping price

#### Defined in

main.ts:172194

___

### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

#### Defined in

main.ts:172210

___

### tax

• `Optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Defined in

main.ts:172192

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

main.ts:172182

___

### total\_price

• `Optional` **total\_price**: `number`

product price including tax and shipping

#### Defined in

main.ts:172196

___

### url

• `Optional` **url**: `string`

Google Shopping URL forwarding to the product page

#### Defined in

main.ts:172184

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:172178
