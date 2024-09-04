[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKnowledgeGraphExpandedItemSerpElementItem

# Interface: IKnowledgeGraphExpandedItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:place qa

#### Defined in

main.ts:28690

***

### expanded\_element?

> `optional` **expanded\_element**: [`KnowledgeGraphExpandedElement`](../classes/KnowledgeGraphExpandedElement.md)[]

link of the element

#### Defined in

main.ts:28692

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:28682

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:28678

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:28675

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:28696

***

### title?

> `optional` **title**: `string`

title of the link

#### Defined in

main.ts:28686

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:28684
