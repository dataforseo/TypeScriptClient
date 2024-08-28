[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IRelatedSearchesDataforseoLabsSerpElementItem

# Interface: IRelatedSearchesDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:97750

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97745

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97741

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97738

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:97735

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97747
