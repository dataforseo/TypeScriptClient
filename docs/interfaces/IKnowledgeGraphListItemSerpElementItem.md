[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphListItemSerpElementItem

# Interface: IKnowledgeGraphListItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphListItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphListItemSerpElementItem`](../classes/KnowledgeGraphListItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphListItemSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphListItemSerpElementItem.md#items)
- [link](IKnowledgeGraphListItemSerpElementItem.md#link)
- [position](IKnowledgeGraphListItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphListItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphListItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphListItemSerpElementItem.md#rectangle)
- [title](IKnowledgeGraphListItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphListItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Defined in

main.ts:26872

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:26877

___

### link

• `Optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

main.ts:26874

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:26864

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:26860

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:26857

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:26881

___

### title

• `Optional` **title**: `string`

title of the link element

#### Defined in

main.ts:26868

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:26866
