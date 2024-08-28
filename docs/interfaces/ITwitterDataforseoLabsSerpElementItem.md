[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ITwitterDataforseoLabsSerpElementItem

# Interface: ITwitterDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`TwitterElement`](../classes/TwitterElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:97552

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97543

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97539

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97536

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:97533

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:97547

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:97549

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97545
