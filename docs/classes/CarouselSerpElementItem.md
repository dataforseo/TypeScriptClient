[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / CarouselSerpElementItem

# Class: CarouselSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new CarouselSerpElementItem()

> **new CarouselSerpElementItem**(`data`?): [`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Parameters

• **data?**: [`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md)

#### Returns

[`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:31514

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`CarouselElement`](CarouselElement.md)[]

contains arrays of specific images

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`items`](../interfaces/ICarouselSerpElementItem.md#items)

#### Defined in

main.ts:31506

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`position`](../interfaces/ICarouselSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:20363

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rank_absolute`](../interfaces/ICarouselSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20359

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rank_group`](../interfaces/ICarouselSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:20356

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rectangle`](../interfaces/ICarouselSerpElementItem.md#rectangle)

#### Defined in

main.ts:31510

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`title`](../interfaces/ICarouselSerpElementItem.md#title)

#### Defined in

main.ts:31504

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`type`](../interfaces/ICarouselSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`xpath`](../interfaces/ICarouselSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:20365

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

main.ts:31519

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

main.ts:31543

***

### fromJS()

> `static` **fromJS**(`data`): [`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`CarouselSerpElementItem`](CarouselSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31536
