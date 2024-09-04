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

main.ts:31777

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`CarouselElement`](CarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`items`](../interfaces/ICarouselSerpElementItem.md#items)

#### Defined in

main.ts:31769

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`position`](../interfaces/ICarouselSerpElementItem.md#position)

#### Defined in

main.ts:31762

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rank_absolute`](../interfaces/ICarouselSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:31758

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rank_group`](../interfaces/ICarouselSerpElementItem.md#rank_group)

#### Defined in

main.ts:31754

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`rectangle`](../interfaces/ICarouselSerpElementItem.md#rectangle)

#### Defined in

main.ts:31773

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`title`](../interfaces/ICarouselSerpElementItem.md#title)

#### Defined in

main.ts:31766

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`ICarouselSerpElementItem`](../interfaces/ICarouselSerpElementItem.md).[`xpath`](../interfaces/ICarouselSerpElementItem.md#xpath)

#### Defined in

main.ts:31764

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

main.ts:31782

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

main.ts:31810

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

main.ts:31803
