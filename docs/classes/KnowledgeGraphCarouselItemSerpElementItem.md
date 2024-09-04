[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphCarouselItemSerpElementItem

# Class: KnowledgeGraphCarouselItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphCarouselItemSerpElementItem()

> **new KnowledgeGraphCarouselItemSerpElementItem**(`data`?): [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:27766

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`data_attrid`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#data_attrid)

#### Defined in

main.ts:27754

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](KnowledgeGraphListElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#items)

#### Defined in

main.ts:27758

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#link)

#### Defined in

main.ts:27756

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#position)

#### Defined in

main.ts:27746

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:27742

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:27739

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:27762

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`title`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#title)

#### Defined in

main.ts:27750

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphCarouselItemSerpElementItem`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphCarouselItemSerpElementItem.md#xpath)

#### Defined in

main.ts:27748

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

main.ts:27771

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

main.ts:27801

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphCarouselItemSerpElementItem`](KnowledgeGraphCarouselItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:27794
