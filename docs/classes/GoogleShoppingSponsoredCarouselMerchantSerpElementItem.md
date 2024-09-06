[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / GoogleShoppingSponsoredCarouselMerchantSerpElementItem

# Class: GoogleShoppingSponsoredCarouselMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleShoppingSponsoredCarouselMerchantSerpElementItem()

> **new GoogleShoppingSponsoredCarouselMerchantSerpElementItem**(`data`?): [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Returns

[`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:174955

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21044

***

### items?

> `optional` **items**: [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)[]

items in SERP

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`items`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#items)

#### Defined in

main.ts:174951

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21042

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21038

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21035

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#title)

#### Defined in

main.ts:174949

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`type`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21032

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#xpath)

#### Defined in

main.ts:174947

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

main.ts:174960

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

main.ts:174984

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:174977
