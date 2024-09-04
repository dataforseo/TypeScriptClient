[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KnowledgeGraphImagesItemSerpElementItem

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

• **data?**: [`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:28074

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### items?

> `optional` **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

items featured in the faq_box

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#items)

#### Defined in

main.ts:28066

***

### link?

> `optional` **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#link)

#### Defined in

main.ts:28064

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#position)

#### Defined in

main.ts:28060

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:28056

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_group)

#### Defined in

main.ts:28053

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rectangle)

#### Defined in

main.ts:28070

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#xpath)

#### Defined in

main.ts:28062

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

main.ts:28079

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

main.ts:28107

***

### fromJS()

> `static` **fromJS**(`data`): [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:28100
