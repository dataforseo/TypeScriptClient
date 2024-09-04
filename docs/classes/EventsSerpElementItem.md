[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / EventsSerpElementItem

# Class: EventsSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new EventsSerpElementItem()

> **new EventsSerpElementItem**(`data`?): [`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Parameters

• **data?**: [`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md)

#### Returns

[`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:32110

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### items?

> `optional` **items**: [`EventsElement`](EventsElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`items`](../interfaces/IEventsSerpElementItem.md#items)

#### Defined in

main.ts:32102

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`position`](../interfaces/IEventsSerpElementItem.md#position)

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

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rank_absolute`](../interfaces/IEventsSerpElementItem.md#rank_absolute)

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

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rank_group`](../interfaces/IEventsSerpElementItem.md#rank_group)

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

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`rectangle`](../interfaces/IEventsSerpElementItem.md#rectangle)

#### Defined in

main.ts:32106

***

### title?

> `optional` **title**: `string`

title of the row

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`title`](../interfaces/IEventsSerpElementItem.md#title)

#### Defined in

main.ts:32097

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`type`](../interfaces/IEventsSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### url?

> `optional` **url**: `string`

source URL

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`url`](../interfaces/IEventsSerpElementItem.md#url)

#### Defined in

main.ts:32099

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IEventsSerpElementItem`](../interfaces/IEventsSerpElementItem.md).[`xpath`](../interfaces/IEventsSerpElementItem.md#xpath)

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

main.ts:32115

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

main.ts:32140

***

### fromJS()

> `static` **fromJS**(`data`): [`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`EventsSerpElementItem`](EventsSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32133
