[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBaseGoogleNewsSerpElementItem

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

main.ts:43926

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:43923

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:43934

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:43930

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:43919

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:43928
