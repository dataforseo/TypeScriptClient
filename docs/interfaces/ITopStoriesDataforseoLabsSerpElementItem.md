[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ITopStoriesDataforseoLabsSerpElementItem

# Interface: ITopStoriesDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`TopStoriesElement`](../classes/TopStoriesElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:98777

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:98773

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:98769

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:98766

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:98775
