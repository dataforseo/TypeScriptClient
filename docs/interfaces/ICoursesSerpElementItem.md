[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ICoursesSerpElementItem

# Interface: ICoursesSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### categories?

> `optional` **categories**: `string`[]

array of course categories
contains a list of categories relevant to courses

#### Defined in

main.ts:38167

***

### items?

> `optional` **items**: [`CoursesElement`](../classes/CoursesElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:38170

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:38160

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Defined in

main.ts:38156

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Defined in

main.ts:38152

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:38174

***

### title?

> `optional` **title**: `string`

title of the row

#### Defined in

main.ts:38164

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:38162
