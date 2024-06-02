**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TopSightsSerpElementItem

# Class: TopSightsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TopSightsSerpElementItem(data)

> **new TopSightsSerpElementItem**(`data`?): [`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Parameters

• **data?**: [`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md)

#### Returns

[`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:32816

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19668

***

### items?

> **`optional`** **items**: [`TopSightsElement`](TopSightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`items`](../interfaces/ITopSightsSerpElementItem.md#items)

#### Source

main.ts:32808

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`position`](../interfaces/ITopSightsSerpElementItem.md#position)

#### Source

main.ts:32801

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rank_absolute`](../interfaces/ITopSightsSerpElementItem.md#rank_absolute)

#### Source

main.ts:32797

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rank_group`](../interfaces/ITopSightsSerpElementItem.md#rank_group)

#### Source

main.ts:32793

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`rectangle`](../interfaces/ITopSightsSerpElementItem.md#rectangle)

#### Source

main.ts:32812

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`title`](../interfaces/ITopSightsSerpElementItem.md#title)

#### Source

main.ts:32805

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ITopSightsSerpElementItem`](../interfaces/ITopSightsSerpElementItem.md).[`xpath`](../interfaces/ITopSightsSerpElementItem.md#xpath)

#### Source

main.ts:32803

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

main.ts:32821

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

main.ts:32849

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`TopSightsSerpElementItem`](TopSightsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:32842
