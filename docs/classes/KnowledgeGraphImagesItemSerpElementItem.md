**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new KnowledgeGraphImagesItemSerpElementItem(data)

> **new KnowledgeGraphImagesItemSerpElementItem**(`data`?): [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Parameters

• **data?**: [`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md)

#### Returns

[`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:27457

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19817

***

### items?

> **`optional`** **items**: [`KnowledgeGraphImagesElement`](KnowledgeGraphImagesElement.md)[]

items featured in the faq_box

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`items`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#items)

#### Source

main.ts:27449

***

### link?

> **`optional`** **link**: [`LinkElement`](LinkElement.md)

link of the element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`link`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#link)

#### Source

main.ts:27447

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`position`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#position)

#### Source

main.ts:27443

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rank_absolute`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_absolute)

#### Source

main.ts:27439

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rank_group`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rank_group)

#### Source

main.ts:27436

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`rectangle`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#rectangle)

#### Source

main.ts:27453

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IKnowledgeGraphImagesItemSerpElementItem`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md).[`xpath`](../interfaces/IKnowledgeGraphImagesItemSerpElementItem.md#xpath)

#### Source

main.ts:27445

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:27462

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:27490

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`KnowledgeGraphImagesItemSerpElementItem`](KnowledgeGraphImagesItemSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:27483
