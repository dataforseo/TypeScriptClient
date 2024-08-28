[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ITwitterSerpElementItem

# Interface: ITwitterSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`TwitterElement`](../classes/TwitterElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:30906

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:30897

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:30893

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:30889

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:30910

***

### title?

> `optional` **title**: `string`

title of the row

#### Defined in

main.ts:30901

***

### url?

> `optional` **url**: `string`

source URL

#### Defined in

main.ts:30903

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:30899
