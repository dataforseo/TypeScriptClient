**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new BuyOnGoogleMerchantSerpElementItem(data)

> **new BuyOnGoogleMerchantSerpElementItem**(`data`?): [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md)

#### Returns

[`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Source

main.ts:178686

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Source

main.ts:20843

***

### base\_price?

> **`optional`** **base\_price**: `number`

product price without tax and shipping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`base_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#base_price)

#### Source

main.ts:178661

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`currency`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#currency)

#### Source

main.ts:178672

***

### details?

> **`optional`** **details**: `string`

details and special offers
if there are no details, the value will be null

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`details`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#details)

#### Source

main.ts:178659

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`domain`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#domain)

#### Source

main.ts:178652

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`position`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#position)

#### Source

main.ts:178648

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rank_absolute)

#### Source

main.ts:178644

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rank_group`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rank_group)

#### Source

main.ts:178641

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

shop rating
the shop popularity rate based on product reviews

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`rating`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#rating)

#### Source

main.ts:178678

***

### seller\_name?

> **`optional`** **seller\_name**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`seller_name`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#seller_name)

#### Source

main.ts:178675

***

### shipping\_price?

> **`optional`** **shipping\_price**: `number`

product shipping price

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`shipping_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#shipping_price)

#### Source

main.ts:178666

***

### shop\_ad\_aclk?

> **`optional`** **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL
in this case, the value equals null

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#shop_ad_aclk)

#### Source

main.ts:178682

***

### tax?

> **`optional`** **tax**: `number`

the amount of tax
tax is specified as the actual amount of money, not as the percentage

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`tax`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#tax)

#### Source

main.ts:178664

***

### title?

> **`optional`** **title**: `string`

product title

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`title`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#title)

#### Source

main.ts:178654

***

### total\_price?

> **`optional`** **total\_price**: `number`

product price including tax and shipping

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`total_price`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#total_price)

#### Source

main.ts:178668

***

### url?

> **`optional`** **url**: `string`

Google Shopping URL forwarding to the product page

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`url`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#url)

#### Source

main.ts:178656

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IBuyOnGoogleMerchantSerpElementItem`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md).[`xpath`](../interfaces/IBuyOnGoogleMerchantSerpElementItem.md#xpath)

#### Source

main.ts:178650

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Source

main.ts:178691

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Source

main.ts:178724

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BuyOnGoogleMerchantSerpElementItem`](BuyOnGoogleMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Source

main.ts:178717
