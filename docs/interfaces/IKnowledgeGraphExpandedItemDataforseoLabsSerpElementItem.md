[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#data_attrid)
- [expanded\_element](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#expanded_element)
- [position](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#title)
- [xpath](IKnowledgeGraphExpandedItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Defined in

main.ts:94044

___

### expanded\_element

• `Optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](../classes/KnowledgeGraphExpandedElement.md)[]

link of the element

#### Defined in

main.ts:94046

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:94036

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:94032

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:94029

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:94040

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:94038
