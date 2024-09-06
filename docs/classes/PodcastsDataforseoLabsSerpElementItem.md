[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PodcastsDataforseoLabsSerpElementItem

# Class: PodcastsDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PodcastsDataforseoLabsSerpElementItem()

> **new PodcastsDataforseoLabsSerpElementItem**(`data`?): [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md)

#### Returns

[`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:99017

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20747

***

### items?

> `optional` **items**: [`PodcastsElement`](PodcastsElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:99013

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20743

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20739

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20745

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:99022

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:99044

***

### fromJS()

> `static` **fromJS**(`data`): [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:99037
