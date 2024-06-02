**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphCarouselItemSerpElementItem

# Interface: IKnowledgeGraphCarouselItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
action:listen_artist

#### Source

main.ts:27071

***

### items?

> **`optional`** **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

elements of search results found in SERP

#### Source

main.ts:27075

***

### link?

> **`optional`** **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Source

main.ts:27073

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:27063

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:27059

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:27056

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:27079

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:27067

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:27065
