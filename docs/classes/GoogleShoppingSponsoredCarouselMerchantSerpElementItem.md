[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleShoppingSponsoredCarouselMerchantSerpElementItem

# Class: GoogleShoppingSponsoredCarouselMerchantSerpElementItem

Defined in: main.ts:186742

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleShoppingSponsoredCarouselMerchantSerpElementItem()

> **new GoogleShoppingSponsoredCarouselMerchantSerpElementItem**(`data`?): [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

Defined in: main.ts:186752

#### Parameters

##### data?

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Returns

[`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21722

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`GoogleShoppingSponsoredCarouselElement`](GoogleShoppingSponsoredCarouselElement.md)[]

Defined in: main.ts:186748

items in SERP

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`items`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21720

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21716

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21713

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:186746

product title

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21710

type of element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`type`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:186744

XPath of the element

#### Implementation of

[`IGoogleShoppingSponsoredCarouselMerchantSerpElementItem`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingSponsoredCarouselMerchantSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:186757

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:186781

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

Defined in: main.ts:186774

#### Parameters

##### data

`any`

#### Returns

[`GoogleShoppingSponsoredCarouselMerchantSerpElementItem`](GoogleShoppingSponsoredCarouselMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)
