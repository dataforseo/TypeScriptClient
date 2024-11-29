[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseGoogleNewsSerpElementItem

# Interface: IBaseGoogleNewsSerpElementItem

## Extended by

- [`IGoogleNewsNewsSearchSerpElementItem`](IGoogleNewsNewsSearchSerpElementItem.md)
- [`IGoogleNewsTopStoriesSerpElementItem`](IGoogleNewsTopStoriesSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:46204

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:46201

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:46212

***

### title?

> `optional` **title**: `string`

title of the element

#### Defined in

main.ts:46208

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:46197

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:46206
