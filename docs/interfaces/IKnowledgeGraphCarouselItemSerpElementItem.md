[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphCarouselItemSerpElementItem

# Interface: IKnowledgeGraphCarouselItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphCarouselItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphCarouselItemSerpElementItem`](../classes/KnowledgeGraphCarouselItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphCarouselItemSerpElementItem.md#data_attrid)
- [items](IKnowledgeGraphCarouselItemSerpElementItem.md#items)
- [link](IKnowledgeGraphCarouselItemSerpElementItem.md#link)
- [position](IKnowledgeGraphCarouselItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphCarouselItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphCarouselItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphCarouselItemSerpElementItem.md#rectangle)
- [title](IKnowledgeGraphCarouselItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphCarouselItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Defined in

main.ts:26451

___

### items

• `Optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:26455

___

### link

• `Optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

main.ts:26453

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:26443

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:26439

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:26436

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:26459

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:26447

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:26445
