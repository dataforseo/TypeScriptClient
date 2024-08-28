[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IMultiCarouselDataforseoLabsSerpElementItem

# Interface: IMultiCarouselDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`MultiCarouselElement`](../classes/MultiCarouselElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:98687

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:98683

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:98679

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:98676

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:98685
