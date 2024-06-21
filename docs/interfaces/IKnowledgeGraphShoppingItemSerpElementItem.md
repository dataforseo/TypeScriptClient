**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphShoppingItemSerpElementItem

# Interface: IKnowledgeGraphShoppingItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Source

main.ts:28462

***

### items?

> **`optional`** **items**: [`KnowledgeGraphShoppingElement`](../classes/KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:28465

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:28454

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:28450

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:28447

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:28469

***

### title?

> **`optional`** **title**: `string`

title of the place

#### Source

main.ts:28458

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:28456
