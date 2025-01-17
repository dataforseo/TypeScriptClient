[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphHotelsBookingItemSerpElementItem

# Class: KnowledgeGraphHotelsBookingItemSerpElementItem

Defined in: main.ts:30647

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphHotelsBookingItemSerpElementItem()

> **new KnowledgeGraphHotelsBookingItemSerpElementItem**(`data`?): [`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

Defined in: main.ts:30674

#### Parameters

##### data?

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:30663

google defined data attribute ID
example:
kc:/local:hotel booking

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#data_attrid)

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:30654

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`date_from`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#date_from)

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:30659

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`date_to`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#date_to)

***

### items?

> `optional` **items**: [`KnowledgeGraphHotelsBookingElement`](KnowledgeGraphHotelsBookingElement.md)[]

Defined in: main.ts:30666

additional items present in the element
if there are none, equals null

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:30670

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30649

title of a given link element

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IKnowledgeGraphHotelsBookingItemSerpElementItem`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphHotelsBookingItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30679

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:30706

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

Defined in: main.ts:30699

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphHotelsBookingItemSerpElementItem`](KnowledgeGraphHotelsBookingItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
