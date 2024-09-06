[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PodcastsSerpElementItem

# Class: PodcastsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PodcastsSerpElementItem()

> **new PodcastsSerpElementItem**(`data`?): [`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Parameters

• **data?**: [`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md)

#### Returns

[`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:33348

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`PodcastsElement`](PodcastsElement.md)[]

contains arrays of specific images

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`items`](../interfaces/IPodcastsSerpElementItem.md#items)

#### Defined in

main.ts:33340

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`position`](../interfaces/IPodcastsSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:20363

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`rank_absolute`](../interfaces/IPodcastsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20359

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`rank_group`](../interfaces/IPodcastsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20356

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`rectangle`](../interfaces/IPodcastsSerpElementItem.md#rectangle)

#### Defined in

main.ts:33344

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`type`](../interfaces/IPodcastsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`xpath`](../interfaces/IPodcastsSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20365

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:33353

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:33376

***

### fromJS()

> `static` **fromJS**(`data`): [`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33369
