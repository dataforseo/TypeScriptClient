[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphPartItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphPartItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphPartItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphPartItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphPartItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#data_attrid)
- [links](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#links)
- [position](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#rank_group)
- [text](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#text)
- [title](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#title)
- [xpath](IKnowledgeGraphPartItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Defined in

main.ts:93936

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

link of the element

#### Defined in

main.ts:93940

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:93928

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:93924

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:93921

___

### text

• `Optional` **text**: `string`

content within the item

#### Defined in

main.ts:93938

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:93932

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:93930
