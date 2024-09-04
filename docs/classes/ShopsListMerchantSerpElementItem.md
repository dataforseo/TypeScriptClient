[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ShopsListMerchantSerpElementItem

# Class: ShopsListMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShopsListMerchantSerpElementItem()

> **new ShopsListMerchantSerpElementItem**(`data`?): [`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md)

#### Returns

[`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:176161

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21039

***

### base\_price?

> `optional` **base\_price**: `number`

product price without tax and shipping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`base_price`](../interfaces/IShopsListMerchantSerpElementItem.md#base_price)

#### Defined in

main.ts:176130

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`currency`](../interfaces/IShopsListMerchantSerpElementItem.md#currency)

#### Defined in

main.ts:176141

***

### details?

> `optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`details`](../interfaces/IShopsListMerchantSerpElementItem.md#details)

#### Defined in

main.ts:176128

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`domain`](../interfaces/IShopsListMerchantSerpElementItem.md#domain)

#### Defined in

main.ts:176120

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`position`](../interfaces/IShopsListMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21037

***

### product\_annotation?

> `optional` **product\_annotation**: `string`

data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`product_annotation`](../interfaces/IShopsListMerchantSerpElementItem.md#product_annotation)

#### Defined in

main.ts:176157

***

### product\_condition?

> `optional` **product\_condition**: `string`

indicated condition of the product
possible values: Used, Refurbished, New, null

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`product_condition`](../interfaces/IShopsListMerchantSerpElementItem.md#product_condition)

#### Defined in

main.ts:176153

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IShopsListMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21033

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rank_group`](../interfaces/IShopsListMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21030

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`rating`](../interfaces/IShopsListMerchantSerpElementItem.md#rating)

#### Defined in

main.ts:176147

***

### seller\_name?

> `optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`seller_name`](../interfaces/IShopsListMerchantSerpElementItem.md#seller_name)

#### Defined in

main.ts:176144

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

product shipping price

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`shipping_price`](../interfaces/IShopsListMerchantSerpElementItem.md#shipping_price)

#### Defined in

main.ts:176135

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IShopsListMerchantSerpElementItem.md#shop_ad_aclk)

#### Defined in

main.ts:176150

***

### tax?

> `optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`tax`](../interfaces/IShopsListMerchantSerpElementItem.md#tax)

#### Defined in

main.ts:176133

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`title`](../interfaces/IShopsListMerchantSerpElementItem.md#title)

#### Defined in

main.ts:176122

***

### total\_price?

> `optional` **total\_price**: `number`

product price including tax and shipping

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`total_price`](../interfaces/IShopsListMerchantSerpElementItem.md#total_price)

#### Defined in

main.ts:176137

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`type`](../interfaces/IShopsListMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21027

***

### url?

> `optional` **url**: `string`

Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`url`](../interfaces/IShopsListMerchantSerpElementItem.md#url)

#### Defined in

main.ts:176125

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IShopsListMerchantSerpElementItem`](../interfaces/IShopsListMerchantSerpElementItem.md).[`xpath`](../interfaces/IShopsListMerchantSerpElementItem.md#xpath)

#### Defined in

main.ts:176118

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Defined in

main.ts:176166

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

main.ts:176198

***

### fromJS()

> `static` **fromJS**(`data`): [`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShopsListMerchantSerpElementItem`](ShopsListMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:176191
