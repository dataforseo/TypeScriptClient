**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GoogleShoppingSponsoredCarouselMerchantSerpElementItem

# Class: GoogleShoppingSponsoredCarouselMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleShoppingSponsoredCarouselMerchantSerpElementItem(data)

> **new GoogleShoppingSponsoredCarouselMerchantSerpElementItem**(`data`?): [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Returns

[`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Source

main.ts:170790

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Source

main.ts:20444

***

### items?

> **`optional`** **items**: [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)[]

items in SERP

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`items`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#items)

#### Source

main.ts:170786

***

### position?

> **`optional`** **position**: `string`

alignment of the element in Google Shopping SERP
possible values:
left, right

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#position)

#### Source

main.ts:170780

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_absolute)

#### Source

main.ts:170776

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_group)

#### Source

main.ts:170773

***

### title?

> **`optional`** **title**: `string`

product title

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#title)

#### Source

main.ts:170784

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#xpath)

#### Source

main.ts:170782

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

main.ts:170795

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

main.ts:170822

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Source

main.ts:170815
