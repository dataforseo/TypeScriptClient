[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ILocalServicesSerpElementItem

# Interface: ILocalServicesSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### domain?

> `optional` **domain**: `string`

source domain

#### Defined in

main.ts:35677

***

### items?

> `optional` **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:35680

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:35669

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:35665

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:35661

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:35684

***

### title?

> `optional` **title**: `string`

title of the row

#### Defined in

main.ts:35673

***

### url?

> `optional` **url**: `string`

source URL

#### Defined in

main.ts:35675

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:35671
