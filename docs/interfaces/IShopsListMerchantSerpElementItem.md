[Documentation](../README.md) / [Exports](../modules.md) / IShopsListMerchantSerpElementItem

# Interface: IShopsListMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

  ↳ **`IShopsListMerchantSerpElementItem`**

## Implemented by

- [`ShopsListMerchantSerpElementItem`](../classes/ShopsListMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [base\_price](IShopsListMerchantSerpElementItem.md#base_price)
- [currency](IShopsListMerchantSerpElementItem.md#currency)
- [details](IShopsListMerchantSerpElementItem.md#details)
- [domain](IShopsListMerchantSerpElementItem.md#domain)
- [position](IShopsListMerchantSerpElementItem.md#position)
- [product\_annotation](IShopsListMerchantSerpElementItem.md#product_annotation)
- [product\_condition](IShopsListMerchantSerpElementItem.md#product_condition)
- [rank\_absolute](IShopsListMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IShopsListMerchantSerpElementItem.md#rank_group)
- [rating](IShopsListMerchantSerpElementItem.md#rating)
- [seller\_name](IShopsListMerchantSerpElementItem.md#seller_name)
- [shipping\_price](IShopsListMerchantSerpElementItem.md#shipping_price)
- [shop\_ad\_aclk](IShopsListMerchantSerpElementItem.md#shop_ad_aclk)
- [tax](IShopsListMerchantSerpElementItem.md#tax)
- [title](IShopsListMerchantSerpElementItem.md#title)
- [total\_price](IShopsListMerchantSerpElementItem.md#total_price)
- [url](IShopsListMerchantSerpElementItem.md#url)
- [xpath](IShopsListMerchantSerpElementItem.md#xpath)

## Properties

### base\_price

• `Optional` **base\_price**: `number`

product price without tax and shipping

#### Defined in

main.ts:172016

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:172027

___

### details

• `Optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Defined in

main.ts:172014

___

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:172006

___

### position

• `Optional` **position**: `string`

the alignment of the element in Google Shopping SERP
possible values:
left, right

#### Defined in

main.ts:172002

___

### product\_annotation

• `Optional` **product\_annotation**: `string`

data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP

#### Defined in

main.ts:172043

___

### product\_condition

• `Optional` **product\_condition**: `string`

indicated condition of the product
possible values: Used, Refurbished, New, null

#### Defined in

main.ts:172039

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:171998

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:171995

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Defined in

main.ts:172033

___

### seller\_name

• `Optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:172030

___

### shipping\_price

• `Optional` **shipping\_price**: `number`

product shipping price

#### Defined in

main.ts:172021

___

### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

main.ts:172036

___

### tax

• `Optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Defined in

main.ts:172019

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

main.ts:172008

___

### total\_price

• `Optional` **total\_price**: `number`

product price including tax and shipping

#### Defined in

main.ts:172023

___

### url

• `Optional` **url**: `string`

Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint

#### Defined in

main.ts:172011

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:172004
