[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / PodcastsDataforseoLabsSerpElementItem

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

main.ts:101579

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### items?

> `optional` **items**: [`PodcastsElement`](PodcastsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:101575

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:101570

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:101566

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:101563

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:101572

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

main.ts:101584

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

main.ts:101610

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

main.ts:101603
