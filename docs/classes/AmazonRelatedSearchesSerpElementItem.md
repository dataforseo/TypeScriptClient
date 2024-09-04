[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AmazonRelatedSearchesSerpElementItem

# Class: AmazonRelatedSearchesSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonRelatedSearchesSerpElementItem()

> **new AmazonRelatedSearchesSerpElementItem**(`data`?): [`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md)

#### Returns

[`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:184983

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22007

***

### items?

> `optional` **items**: [`RelatedSearchesElement`](RelatedSearchesElement.md)[]

Amazon product items

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#items)

#### Defined in

main.ts:184979

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#position)

#### Defined in

main.ts:184975

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:184971

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#rank_group)

#### Defined in

main.ts:184968

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonRelatedSearchesSerpElementItem`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IAmazonRelatedSearchesSerpElementItem.md#xpath)

#### Defined in

main.ts:184977

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:184988

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:185014

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonRelatedSearchesSerpElementItem`](AmazonRelatedSearchesSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:185007
