[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphRowItemSerpElementItem

# Interface: IKnowledgeGraphRowItemSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IKnowledgeGraphRowItemSerpElementItem`**

## Implemented by

- [`KnowledgeGraphRowItemSerpElementItem`](../classes/KnowledgeGraphRowItemSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [data\_attrid](IKnowledgeGraphRowItemSerpElementItem.md#data_attrid)
- [links](IKnowledgeGraphRowItemSerpElementItem.md#links)
- [position](IKnowledgeGraphRowItemSerpElementItem.md#position)
- [rank\_absolute](IKnowledgeGraphRowItemSerpElementItem.md#rank_absolute)
- [rank\_group](IKnowledgeGraphRowItemSerpElementItem.md#rank_group)
- [rectangle](IKnowledgeGraphRowItemSerpElementItem.md#rectangle)
- [text](IKnowledgeGraphRowItemSerpElementItem.md#text)
- [title](IKnowledgeGraphRowItemSerpElementItem.md#title)
- [xpath](IKnowledgeGraphRowItemSerpElementItem.md#xpath)

## Properties

### data\_attrid

• `Optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Defined in

main.ts:26995

___

### links

• `Optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

links featured in the faq_box_element

#### Defined in

main.ts:26999

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:26987

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:26983

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:26980

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:27003

___

### text

• `Optional` **text**: `string`

row content

#### Defined in

main.ts:26997

___

### title

• `Optional` **title**: `string`

title of the item

#### Defined in

main.ts:26991

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:26989
