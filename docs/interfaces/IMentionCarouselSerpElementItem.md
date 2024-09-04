[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IMentionCarouselSerpElementItem

# Interface: IMentionCarouselSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`MentionCarouselElement`](../classes/MentionCarouselElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:32756

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:32749

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:32745

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:32741

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:32760

***

### title?

> `optional` **title**: `string`

title of the row

#### Defined in

main.ts:32753

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:32751
