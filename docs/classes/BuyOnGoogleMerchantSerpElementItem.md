[**Documentation**](../README.md)

***

[Documentation](../README.md) / BuyOnGoogleMerchantSerpElementItem

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

##### data?

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md)

#### Returns

[`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:188074

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21722

***

### base\_price?

> `optional` **base\_price**: `number`

product price without tax and shipping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`base_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#base_price)

#### Defined in

main.ts:188049

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`currency`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#currency)

#### Defined in

main.ts:188060

***

### details?

> `optional` **details**: `string`

details and special offers
if there are no details, the value will be null

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`details`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#details)

#### Defined in

main.ts:188047

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`domain`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#domain)

#### Defined in

main.ts:188040

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`position`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21720

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21716

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rank_group`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21713

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rating`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rating)

#### Defined in

main.ts:188066

***

### seller\_name?

> `optional` **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`seller_name`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#seller_name)

#### Defined in

main.ts:188063

***

### shipping\_price?

> `optional` **shipping\_price**: `number`

product shipping price

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`shipping_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#shipping_price)

#### Defined in

main.ts:188054

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#shop_ad_aclk)

#### Defined in

main.ts:188070

***

### tax?

> `optional` **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`tax`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#tax)

#### Defined in

main.ts:188052

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`title`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#title)

#### Defined in

main.ts:188042

***

### total\_price?

> `optional` **total\_price**: `number`

product price including tax and shipping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`total_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#total_price)

#### Defined in

main.ts:188056

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`type`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21710

***

### url?

> `optional` **url**: `string`

Google Shopping URL forwarding to the product page

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`url`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#url)

#### Defined in

main.ts:188044

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`xpath`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#xpath)

#### Defined in

main.ts:188038

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Defined in

main.ts:188079

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

main.ts:188109

***

### fromJS()

> `static` **fromJS**(`data`): [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:188102
