[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphCarouselItemSerpElementItem

# Class: KnowledgeGraphCarouselItemSerpElementItem

Defined in: main.ts:29517

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphCarouselItemSerpElementItem()

> **new KnowledgeGraphCarouselItemSerpElementItem**(`data`?): [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

Defined in: main.ts:29535

#### Parameters

##### data?

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

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

Defined in: main.ts:29523

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#data_attrid)

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

Defined in: main.ts:29527

elements of search results found in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#items)

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

Defined in: main.ts:29525

link of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#link)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rank_absolute)

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

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:29531

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:29519

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:29540

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

Defined in: main.ts:29566

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

Defined in: main.ts:29559

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
