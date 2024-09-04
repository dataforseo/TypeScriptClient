[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKnowledgeGraphImagesItemSerpElementItem

# Interface: IKnowledgeGraphImagesItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`KnowledgeGraphImagesElement`](../classes/KnowledgeGraphImagesElement.md)[]

items featured in the faq_box

#### Defined in

main.ts:28146

***

### link?

> `optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

main.ts:28144

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:28140

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:28136

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:28133

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:28150

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:28142
