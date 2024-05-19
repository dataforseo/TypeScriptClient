**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / VideoSerpElementItem

# Class: VideoSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new VideoSerpElementItem(data)

> **new VideoSerpElementItem**(`data`?): [`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Parameters

• **data?**: [`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md)

#### Returns

[`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:31381

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19994

***

### items?

> **`optional`** **items**: [`VideoElement`](VideoElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`items`](../interfaces/IVideoSerpElementItem.md#items)

#### Source

main.ts:31373

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`position`](../interfaces/IVideoSerpElementItem.md#position)

#### Source

main.ts:31368

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rank_absolute`](../interfaces/IVideoSerpElementItem.md#rank_absolute)

#### Source

main.ts:31364

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rank_group`](../interfaces/IVideoSerpElementItem.md#rank_group)

#### Source

main.ts:31360

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`rectangle`](../interfaces/IVideoSerpElementItem.md#rectangle)

#### Source

main.ts:31377

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IVideoSerpElementItem`](../interfaces/IVideoSerpElementItem.md).[`xpath`](../interfaces/IVideoSerpElementItem.md#xpath)

#### Source

main.ts:31370

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

main.ts:31386

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

main.ts:31413

***

### fromJS()

> **`static`** **fromJS**(`data`): [`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`VideoSerpElementItem`](VideoSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:31406
