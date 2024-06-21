**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new PodcastsDataforseoLabsSerpElementItem(data)

> **new PodcastsDataforseoLabsSerpElementItem**(`data`?): [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md)

#### Returns

[`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:99598

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`PodcastsElement`](PodcastsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:99594

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:99589

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:99585

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:99582

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPodcastsDataforseoLabsSerpElementItem`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IPodcastsDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:99591

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:99603

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:99629

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PodcastsDataforseoLabsSerpElementItem`](PodcastsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:99622
