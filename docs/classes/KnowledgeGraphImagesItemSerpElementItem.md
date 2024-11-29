[**Documentation**](../README.md)

***

[Documentation](../README.md) / KnowledgeGraphImagesItemSerpElementItem

# Class: KnowledgeGraphImagesItemSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KnowledgeGraphImagesItemSerpElementItem()

> **new KnowledgeGraphImagesItemSerpElementItem**(`data`?): [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Parameters

##### data?

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:29767

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### items?

> `optional` **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

items featured in the faq_box

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#items)

#### Defined in

main.ts:29759

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#link)

#### Defined in

main.ts:29757

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:21041

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21037

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21034

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:29763

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`type`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21043

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:29772

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:29796

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:29789
