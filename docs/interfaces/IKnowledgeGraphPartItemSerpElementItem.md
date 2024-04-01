[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphPartItemSerpElementItem

# Interface: IKnowledgeGraphPartItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphPartItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphPartItemSerpElementItem`](../classes/KnowledgeGraphPartItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphPartItemSerpElementItem.md#data_attrid)
- [links](IKnowledgeGraphPartItemSerpElementItem.md#links)
- [position](IKnowledgeGraphPartItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphPartItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphPartItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphPartItemSerpElementItem.md#rectangle)
- [text](IKnowledgeGraphPartItemSerpElementItem.md#text)
- [title](IKnowledgeGraphPartItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphPartItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Defined in

main.ts:27794

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:27800

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:27786

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:27782

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:27779

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:27804

___

### text

• `Optional` **text**: `string`

content within the item

#### Defined in

main.ts:27796

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:27790

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:27788
