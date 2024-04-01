[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphImagesItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#items)
- [link](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#link)
- [position](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`KnowledgeGraphImagesElement`](../classes/KnowledgeGraphImagesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:94088

___

### link

• `Optional` **link**: `any`

link of the element

#### Defined in

main.ts:94085

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:94081

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:94077

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:94074

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:94083
