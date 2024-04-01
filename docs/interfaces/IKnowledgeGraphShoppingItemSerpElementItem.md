[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphShoppingItemSerpElementItem

# Interface: IKnowledgeGraphShoppingItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphShoppingItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphShoppingItemSerpElementItem`](../classes/KnowledgeGraphShoppingItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphShoppingItemSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphShoppingItemSerpElementItem.md#items)
- [position](IKnowledgeGraphShoppingItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphShoppingItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphShoppingItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphShoppingItemSerpElementItem.md#rectangle)
- [title](IKnowledgeGraphShoppingItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphShoppingItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Defined in

main.ts:28023

___

### items

• `Optional` **items**: [`KnowledgeGraphShoppingElement`](../classes/KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:28026

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:28015

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:28011

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:28008

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:28030

___

### title

• `Optional` **title**: `string`

title of the place

#### Defined in

main.ts:28019

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:28017
