[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKnowledgeGraphShoppingItemSerpElementItem

# Interface: IKnowledgeGraphShoppingItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers

#### Defined in

main.ts:29041

***

### items?

> `optional` **items**: [`KnowledgeGraphShoppingElement`](../classes/KnowledgeGraphShoppingElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:29044

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29033

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:29029

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:29026

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29048

***

### title?

> `optional` **title**: `string`

title of the place

#### Defined in

main.ts:29037

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29035
