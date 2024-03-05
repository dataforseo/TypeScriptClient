[dataforseo-client](../README.md) / [Exports](../modules.md) / IShopsListMerchantSerpElementItem

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

[main.ts:166589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166589)

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

[main.ts:166600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166600)

___

### details

• `Optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Defined in

[main.ts:166587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166587)

___

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Defined in

[main.ts:166579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166579)

___

### position

• `Optional` **position**: `string`

the alignment of the element in Google Shopping SERP
possible values:
left, right

#### Defined in

[main.ts:166575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166575)

___

### product\_annotation

• `Optional` **product\_annotation**: `string`

data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP

#### Defined in

[main.ts:166616](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166616)

___

### product\_condition

• `Optional` **product\_condition**: `string`

indicated condition of the product
possible values: Used, Refurbished, New, null

#### Defined in

[main.ts:166612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166612)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

[main.ts:166571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166571)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:166568](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166568)

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Defined in

[main.ts:166606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166606)

___

### seller\_name

• `Optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

[main.ts:166603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166603)

___

### shipping\_price

• `Optional` **shipping\_price**: `number`

product shipping price

#### Defined in

[main.ts:166594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166594)

___

### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

[main.ts:166609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166609)

___

### tax

• `Optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Defined in

[main.ts:166592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166592)

___

### title

• `Optional` **title**: `string`

product title

#### Defined in

[main.ts:166581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166581)

___

### total\_price

• `Optional` **total\_price**: `number`

product price including tax and shipping

#### Defined in

[main.ts:166596](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166596)

___

### url

• `Optional` **url**: `string`

Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint

#### Defined in

[main.ts:166584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166584)

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

[main.ts:166577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166577)
