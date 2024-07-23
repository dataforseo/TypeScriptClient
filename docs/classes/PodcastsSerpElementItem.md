**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PodcastsSerpElementItem

# Class: PodcastsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PodcastsSerpElementItem(data)

> **new PodcastsSerpElementItem**(`data`?): [`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Parameters

• **data?**: [`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md)

#### Returns

[`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:33931

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### items?

> **`optional`** **items**: [`PodcastsElement`](PodcastsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`items`](../interfaces/IPodcastsSerpElementItem.md#items)

#### Source

main.ts:33923

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`position`](../interfaces/IPodcastsSerpElementItem.md#position)

#### Source

main.ts:33918

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`rank_absolute`](../interfaces/IPodcastsSerpElementItem.md#rank_absolute)

#### Source

main.ts:33914

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`rank_group`](../interfaces/IPodcastsSerpElementItem.md#rank_group)

#### Source

main.ts:33910

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`rectangle`](../interfaces/IPodcastsSerpElementItem.md#rectangle)

#### Source

main.ts:33927

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPodcastsSerpElementItem`](../interfaces/IPodcastsSerpElementItem.md).[`xpath`](../interfaces/IPodcastsSerpElementItem.md#xpath)

#### Source

main.ts:33920

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:33936

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:33963

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PodcastsSerpElementItem`](PodcastsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:33956
