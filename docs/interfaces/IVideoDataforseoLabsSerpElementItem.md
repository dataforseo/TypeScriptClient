[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IVideoDataforseoLabsSerpElementItem

# Interface: IVideoDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`VideoElement`](../classes/VideoElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:99099

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:99095

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:99091

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:99088

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:99097
