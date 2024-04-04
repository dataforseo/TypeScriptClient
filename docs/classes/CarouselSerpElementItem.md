**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / CarouselSerpElementItem

# Class: CarouselSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CarouselSerpElementItem(data)

> **new CarouselSerpElementItem**(`data`?): [`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Parameters

• **data?**: [`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md)

#### Returns

[`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:30811

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19788

***

### items?

> **`optional`** **items**: [`CarouselElement`](CarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`items`](../interfaces/ICarouselSerpElementItem.md#items)

#### Source

main.ts:30803

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`position`](../interfaces/ICarouselSerpElementItem.md#position)

#### Source

main.ts:30796

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rank_absolute`](../interfaces/ICarouselSerpElementItem.md#rank_absolute)

#### Source

main.ts:30792

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rank_group`](../interfaces/ICarouselSerpElementItem.md#rank_group)

#### Source

main.ts:30788

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rectangle`](../interfaces/ICarouselSerpElementItem.md#rectangle)

#### Source

main.ts:30807

***

### title?

> **`optional`** **title**: `string`

title of the row

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`title`](../interfaces/ICarouselSerpElementItem.md#title)

#### Source

main.ts:30800

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`xpath`](../interfaces/ICarouselSerpElementItem.md#xpath)

#### Source

main.ts:30798

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

main.ts:30816

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

main.ts:30844

***

### fromJS()

> **`static`** **fromJS**(`data`): [`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:30837
