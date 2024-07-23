**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / VisualStoriesSerpElementItem

# Class: VisualStoriesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new VisualStoriesSerpElementItem(data)

> **new VisualStoriesSerpElementItem**(`data`?): [`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)

#### Parameters

• **data?**: [`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md)

#### Returns

[`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:34999

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### items?

> **`optional`** **items**: [`LicensesElement`](LicensesElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`items`](../interfaces/IVisualStoriesSerpElementItem.md#items)

#### Source

main.ts:34991

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`position`](../interfaces/IVisualStoriesSerpElementItem.md#position)

#### Source

main.ts:34986

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`rank_absolute`](../interfaces/IVisualStoriesSerpElementItem.md#rank_absolute)

#### Source

main.ts:34982

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`rank_group`](../interfaces/IVisualStoriesSerpElementItem.md#rank_group)

#### Source

main.ts:34978

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`rectangle`](../interfaces/IVisualStoriesSerpElementItem.md#rectangle)

#### Source

main.ts:34995

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IVisualStoriesSerpElementItem`](../interfaces/IVisualStoriesSerpElementItem.md).[`xpath`](../interfaces/IVisualStoriesSerpElementItem.md#xpath)

#### Source

main.ts:34988

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

main.ts:35004

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

main.ts:35031

***

### fromJS()

> **`static`** **fromJS**(`data`): [`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`VisualStoriesSerpElementItem`](VisualStoriesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:35024
