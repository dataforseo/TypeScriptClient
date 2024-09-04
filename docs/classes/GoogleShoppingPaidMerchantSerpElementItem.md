[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleShoppingPaidMerchantSerpElementItem

# Class: GoogleShoppingPaidMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleShoppingPaidMerchantSerpElementItem()

> **new GoogleShoppingPaidMerchantSerpElementItem**(`data`?): [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md)

#### Returns

[`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:178811

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21025

***

### description?

> `optional` **description**: `string`

description of the product in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`description`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#description)

#### Defined in

main.ts:178802

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`domain`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#domain)

#### Defined in

main.ts:178798

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#position)

#### Defined in

main.ts:178794

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:178790

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:178787

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#shop_ad_aclk)

#### Defined in

main.ts:178807

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#title)

#### Defined in

main.ts:178800

***

### url?

> `optional` **url**: `string`

URL to the product page on the seller’s website

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`url`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#url)

#### Defined in

main.ts:178804

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#xpath)

#### Defined in

main.ts:178796

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

main.ts:178816

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

main.ts:178842

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:178835
