[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IEventsDataforseoLabsSerpElementItem

# Interface: IEventsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`EventsElement`](../classes/EventsElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:101081

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:101072

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:101068

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:101065

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:101076

***

### url?

> `optional` **url**: `string`

URL link

#### Defined in

main.ts:101078

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:101074
