[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKnowledgeGraphListItemSerpElementItem

# Interface: IKnowledgeGraphListItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
ss:/webfacts:net_worth

#### Defined in

main.ts:28265

***

### items?

> `optional` **items**: [`KnowledgeGraphListElement`](../classes/KnowledgeGraphListElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:28270

***

### link?

> `optional` **link**: [`LinkElement`](../classes/LinkElement.md)

link of the element

#### Defined in

main.ts:28267

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:28257

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:28253

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:28250

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:28274

***

### title?

> `optional` **title**: `string`

title of the link element

#### Defined in

main.ts:28261

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:28259
