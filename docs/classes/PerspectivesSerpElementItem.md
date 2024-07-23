**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PerspectivesSerpElementItem

# Class: PerspectivesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PerspectivesSerpElementItem(data)

> **new PerspectivesSerpElementItem**(`data`?): [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Parameters

• **data?**: [`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md)

#### Returns

[`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:37263

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### items?

> **`optional`** **items**: [`PerspectivesElement`](PerspectivesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`items`](../interfaces/IPerspectivesSerpElementItem.md#items)

#### Source

main.ts:37255

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`position`](../interfaces/IPerspectivesSerpElementItem.md#position)

#### Source

main.ts:37248

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rank_absolute`](../interfaces/IPerspectivesSerpElementItem.md#rank_absolute)

#### Source

main.ts:37244

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rank_group`](../interfaces/IPerspectivesSerpElementItem.md#rank_group)

#### Source

main.ts:37240

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`rectangle`](../interfaces/IPerspectivesSerpElementItem.md#rectangle)

#### Source

main.ts:37259

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`title`](../interfaces/IPerspectivesSerpElementItem.md#title)

#### Source

main.ts:37252

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPerspectivesSerpElementItem`](../interfaces/IPerspectivesSerpElementItem.md).[`xpath`](../interfaces/IPerspectivesSerpElementItem.md#xpath)

#### Source

main.ts:37250

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

main.ts:37268

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

main.ts:37296

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`PerspectivesSerpElementItem`](PerspectivesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:37289
