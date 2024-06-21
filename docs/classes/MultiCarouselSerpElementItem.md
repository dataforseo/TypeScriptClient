**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MultiCarouselSerpElementItem

# Class: MultiCarouselSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MultiCarouselSerpElementItem(data)

> **new MultiCarouselSerpElementItem**(`data`?): [`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Parameters

• **data?**: [`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md)

#### Returns

[`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:32630

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19855

***

### items?

> **`optional`** **items**: [`MultiCarouselElement`](MultiCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`items`](../interfaces/IMultiCarouselSerpElementItem.md#items)

#### Source

main.ts:32622

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`position`](../interfaces/IMultiCarouselSerpElementItem.md#position)

#### Source

main.ts:32617

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`rank_absolute`](../interfaces/IMultiCarouselSerpElementItem.md#rank_absolute)

#### Source

main.ts:32613

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`rank_group`](../interfaces/IMultiCarouselSerpElementItem.md#rank_group)

#### Source

main.ts:32609

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`rectangle`](../interfaces/IMultiCarouselSerpElementItem.md#rectangle)

#### Source

main.ts:32626

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`xpath`](../interfaces/IMultiCarouselSerpElementItem.md#xpath)

#### Source

main.ts:32619

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

main.ts:32635

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

main.ts:32662

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:32655
