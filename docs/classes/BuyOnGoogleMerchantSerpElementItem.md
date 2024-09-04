[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BuyOnGoogleMerchantSerpElementItem

# Class: BuyOnGoogleMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BuyOnGoogleMerchantSerpElementItem()

> **new BuyOnGoogleMerchantSerpElementItem**(`data`?): [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md)

#### Returns

[`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:180518

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21025

***

### base\_price?

> `optional` **base\_price**: `number`

product price without tax and shipping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`base_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#base_price)

#### Defined in

main.ts:180493

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`currency`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#currency)

#### Defined in

main.ts:180504

***

### details?

> `optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`details`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#details)

#### Defined in

main.ts:180491

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`domain`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#domain)

#### Defined in

main.ts:180484

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`position`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#position)

#### Defined in

main.ts:180480

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:180476

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rank_group`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:180473

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rating`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rating)

#### Defined in

main.ts:180510

***

### seller\_name?

> `optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`seller_name`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#seller_name)

#### Defined in

main.ts:180507

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

product shipping price

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`shipping_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#shipping_price)

#### Defined in

main.ts:180498

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#shop_ad_aclk)

#### Defined in

main.ts:180514

***

### tax?

> `optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`tax`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#tax)

#### Defined in

main.ts:180496

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`title`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#title)

#### Defined in

main.ts:180486

***

### total\_price?

> `optional` **total\_price**: `number`

product price including tax and shipping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`total_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#total_price)

#### Defined in

main.ts:180500

***

### url?

> `optional` **url**: `string`

Google Shopping URL forwarding to the product page

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`url`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#url)

#### Defined in

main.ts:180488

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`xpath`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#xpath)

#### Defined in

main.ts:180482

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

main.ts:180523

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

main.ts:180556

***

### fromJS()

> `static` **fromJS**(`data`): [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:180549
