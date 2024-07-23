**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ShortVideosSerpElementItem

# Class: ShortVideosSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ShortVideosSerpElementItem(data)

> **new ShortVideosSerpElementItem**(`data`?): [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Parameters

• **data?**: [`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md)

#### Returns

[`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:36661

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:20177

***

### items?

> **`optional`** **items**: [`ShortVideosElement`](ShortVideosElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`items`](../interfaces/IShortVideosSerpElementItem.md#items)

#### Source

main.ts:36653

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`position`](../interfaces/IShortVideosSerpElementItem.md#position)

#### Source

main.ts:36646

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rank_absolute`](../interfaces/IShortVideosSerpElementItem.md#rank_absolute)

#### Source

main.ts:36642

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rank_group`](../interfaces/IShortVideosSerpElementItem.md#rank_group)

#### Source

main.ts:36638

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`rectangle`](../interfaces/IShortVideosSerpElementItem.md#rectangle)

#### Source

main.ts:36657

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`title`](../interfaces/IShortVideosSerpElementItem.md#title)

#### Source

main.ts:36650

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IShortVideosSerpElementItem`](../interfaces/IShortVideosSerpElementItem.md).[`xpath`](../interfaces/IShortVideosSerpElementItem.md#xpath)

#### Source

main.ts:36648

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

main.ts:36666

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

main.ts:36694

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ShortVideosSerpElementItem`](ShortVideosSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:36687
