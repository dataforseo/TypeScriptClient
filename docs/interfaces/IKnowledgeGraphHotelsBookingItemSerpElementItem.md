[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IKnowledgeGraphHotelsBookingItemSerpElementItem

# Interface: IKnowledgeGraphHotelsBookingItemSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

google defined data attribute ID
example:
kc:/local:hotel booking

#### Defined in

main.ts:29271

***

### date\_from?

> `optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Defined in

main.ts:29262

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Defined in

main.ts:29267

***

### items?

> `optional` **items**: [`KnowledgeGraphHotelsBookingElement`](../classes/KnowledgeGraphHotelsBookingElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:29274

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:29253

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:29249

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:29246

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:29278

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Defined in

main.ts:29257

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:29255
