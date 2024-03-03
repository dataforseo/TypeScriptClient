[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphImagesItemSerpElementItem

# Interface: IKnowledgeGraphImagesItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphImagesItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphImagesItemSerpElementItem`](../classes/KnowledgeGraphImagesItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IKnowledgeGraphImagesItemSerpElementItem.md#items)
- [link](IKnowledgeGraphImagesItemSerpElementItem.md#link)
- [position](IKnowledgeGraphImagesItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphImagesItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphImagesItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphImagesItemSerpElementItem.md#rectangle)
- [xpath](IKnowledgeGraphImagesItemSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`KnowledgeGraphImagesElement`](../classes/KnowledgeGraphImagesElement.md)[]

items featured in the faq_box

#### Defined in

main.ts:26753

___

### link

• `Optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

main.ts:26751

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:26747

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:26743

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:26740

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:26757

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:26749
