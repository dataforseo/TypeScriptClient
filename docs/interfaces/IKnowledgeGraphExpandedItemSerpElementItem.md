**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphExpandedItemSerpElementItem

# Interface: IKnowledgeGraphExpandedItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Source

main.ts:27915

***

### expanded\_element?

> **`optional`** **expanded\_element**: [`KnowledgeGraphExpandedElement`](../classes/KnowledgeGraphExpandedElement.md)[]

link of the element

#### Source

main.ts:27917

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:27907

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:27903

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:27900

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:27921

***

### title?

> **`optional`** **title**: `string`

title of the link

#### Source

main.ts:27911

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:27909
