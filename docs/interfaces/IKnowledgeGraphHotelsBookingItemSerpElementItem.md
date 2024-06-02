**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphHotelsBookingItemSerpElementItem

# Interface: IKnowledgeGraphHotelsBookingItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> **`optional`** **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:hotel booking

#### Source

main.ts:28496

***

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Source

main.ts:28487

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Source

main.ts:28492

***

### items?

> **`optional`** **items**: [`KnowledgeGraphHotelsBookingElement`](../classes/KnowledgeGraphHotelsBookingElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:28499

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:28478

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:28474

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:28471

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:28503

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Source

main.ts:28482

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:28480
