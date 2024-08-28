[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKnowledgeGraphRowItemSerpElementItem

# Interface: IKnowledgeGraphRowItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/common/topic:social media presence

#### Defined in

main.ts:28388

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

links featured in the faq_box_element

#### Defined in

main.ts:28392

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:28380

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:28376

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:28373

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:28396

***

### text?

> `optional` **text**: `string`

row content

#### Defined in

main.ts:28390

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:28384

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:28382
