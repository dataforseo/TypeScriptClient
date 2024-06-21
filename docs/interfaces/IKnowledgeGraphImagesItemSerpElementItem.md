**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKnowledgeGraphImagesItemSerpElementItem

# Interface: IKnowledgeGraphImagesItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`KnowledgeGraphImagesElement`](../classes/KnowledgeGraphImagesElement.md)[]

items featured in the faq_box

#### Source

main.ts:27567

***

### link?

> **`optional`** **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Source

main.ts:27565

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:27561

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:27557

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:27554

***

### rectangle?

> **`optional`** **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Source

main.ts:27571

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:27563
