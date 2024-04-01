[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphListItemDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphListItemDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IKnowledgeGraphListItemDataforseoLabsSerpElementItem`**

## Implemented by

- [`KnowledgeGraphListItemDataforseoLabsSerpElementItem`](../classes/KnowledgeGraphListItemDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#items)
- [link](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#link)
- [position](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#rank_group)
- [title](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#title)
- [xpath](IKnowledgeGraphListItemDataforseoLabsSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Defined in

main.ts:96058

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:96063

___

### link

• `Optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

main.ts:96060

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:96050

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:96046

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:96043

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:96054

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:96052
