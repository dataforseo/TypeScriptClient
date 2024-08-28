[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKnowledgeGraphCarouselItemSerpElementItem

# Interface: IKnowledgeGraphCarouselItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Defined in

main.ts:27844

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:27848

***

### link?

> `optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

main.ts:27846

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:27836

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:27832

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:27829

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:27852

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:27840

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:27838
