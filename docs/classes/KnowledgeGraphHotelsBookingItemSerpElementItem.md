[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphHotelsBookingItemSerpElementItem

# Class: KnowledgeGraphHotelsBookingItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphHotelsBookingItemSerpElementItem()

> **new KnowledgeGraphHotelsBookingItemSerpElementItem**(`data`?): [`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:29115

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20367

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:hotel booking

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:29104

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`date_from`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#date_from)

#### Defined in

main.ts:29095

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`date_to`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#date_to)

#### Defined in

main.ts:29100

***

### items?

> `optional` **items**: [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#items)

#### Defined in

main.ts:29107

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#position)

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

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_group)

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

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:29111

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#title)

#### Defined in

main.ts:29090

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:20352

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#xpath)

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

main.ts:29120

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

main.ts:29147

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:29140
