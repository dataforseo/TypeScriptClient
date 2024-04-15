**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GoogleShoppingPaidMerchantSerpElementItem

# Class: GoogleShoppingPaidMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleShoppingPaidMerchantSerpElementItem(data)

> **new GoogleShoppingPaidMerchantSerpElementItem**(`data`?): [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md)

#### Returns

[`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Source

main.ts:170547

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Source

main.ts:20444

***

### description?

> **`optional`** **description**: `string`

description of the product in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`description`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#description)

#### Source

main.ts:170538

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`domain`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#domain)

#### Source

main.ts:170534

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#position)

#### Source

main.ts:170530

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#rank_absolute)

#### Source

main.ts:170526

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#rank_group)

#### Source

main.ts:170523

***

### shop\_ad\_aclk?

> **`optional`** **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#shop_ad_aclk)

#### Source

main.ts:170543

***

### title?

> **`optional`** **title**: `string`

product title

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#title)

#### Source

main.ts:170536

***

### url?

> **`optional`** **url**: `string`

URL to the product page on the seller’s website

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`url`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#url)

#### Source

main.ts:170540

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IGoogleShoppingPaidMerchantSerpElementItem`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingPaidMerchantSerpElementItem.md#xpath)

#### Source

main.ts:170532

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

main.ts:170552

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

main.ts:170578

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleShoppingPaidMerchantSerpElementItem`](GoogleShoppingPaidMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Source

main.ts:170571
