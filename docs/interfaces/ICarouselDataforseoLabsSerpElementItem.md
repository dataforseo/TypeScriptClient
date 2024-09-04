[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ICarouselDataforseoLabsSerpElementItem

# Interface: ICarouselDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`CarouselElement`](../classes/CarouselElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:98597

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:98591

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:98587

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:98584

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:98595

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:98593
