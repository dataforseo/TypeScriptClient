[**Documentation**](../README.md) • **Docs**

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

### new MultiCarouselSerpElementItem()

> **new MultiCarouselSerpElementItem**(`data`?): [`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Parameters

• **data?**: [`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md)

#### Returns

[`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:33153

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`MultiCarouselElement`](MultiCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`items`](../interfaces/IMultiCarouselSerpElementItem.md#items)

#### Defined in

main.ts:33145

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`position`](../interfaces/IMultiCarouselSerpElementItem.md#position)

#### Defined in

main.ts:33140

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`rank_absolute`](../interfaces/IMultiCarouselSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:33136

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`rank_group`](../interfaces/IMultiCarouselSerpElementItem.md#rank_group)

#### Defined in

main.ts:33132

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`rectangle`](../interfaces/IMultiCarouselSerpElementItem.md#rectangle)

#### Defined in

main.ts:33149

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IMultiCarouselSerpElementItem`](../interfaces/IMultiCarouselSerpElementItem.md).[`xpath`](../interfaces/IMultiCarouselSerpElementItem.md#xpath)

#### Defined in

main.ts:33142

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:33158

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:33185

***

### fromJS()

> `static` **fromJS**(`data`): [`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`MultiCarouselSerpElementItem`](MultiCarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:33178
