[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseGoogleNewsSerpElementItem

# Interface: IBaseGoogleNewsSerpElementItem

Defined in: main.ts:46195

## Extended by

- [`IGoogleNewsNewsSearchSerpElementItem`](IGoogleNewsNewsSearchSerpElementItem.md)
- [`IGoogleNewsTopStoriesSerpElementItem`](IGoogleNewsTopStoriesSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:46204

absolute rank in SERP
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:46201

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:46212

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:46208

title of the element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:46197

type of element

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:46206

the XPath of the element
