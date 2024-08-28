[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAnswerBoxDataforseoLabsSerpElementItem

# Interface: IAnswerBoxDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

main.ts:98887

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:98878

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:98874

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:98871

***

### text?

> `optional` **text**: `string`[]

text
if there is none, equals null

#### Defined in

main.ts:98883

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:98880
