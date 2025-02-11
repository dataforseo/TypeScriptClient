[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphExpandedItemSerpElementItem

# Class: KnowledgeGraphExpandedItemSerpElementItem

Defined in: main.ts:30197

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphExpandedItemSerpElementItem()

> **new KnowledgeGraphExpandedItemSerpElementItem**(`data`?): [`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

Defined in: main.ts:30213

#### Parameters

##### data?

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

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

Defined in: main.ts:30203

google defined data attribute ID
example:
kc:/local:place qa

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#data_attrid)

***

### expanded\_element?

> `optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](KnowledgeGraphExpandedElement.md)[]

Defined in: main.ts:30205

link of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`expanded_element`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#expanded_element)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:30209

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30199

title of the link

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IKnowledgeGraphExpandedItemSerpElementItem`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphExpandedItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30218

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

Defined in: main.ts:30243

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

Defined in: main.ts:30236

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphExpandedItemSerpElementItem`](KnowledgeGraphExpandedItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
