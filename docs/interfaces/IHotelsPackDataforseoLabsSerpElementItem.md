[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IHotelsPackDataforseoLabsSerpElementItem

# Interface: IHotelsPackDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Defined in

main.ts:99657

***

### date\_to?

> `optional` **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Defined in

main.ts:99662

***

### items?

> `optional` **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:99665

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:99648

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:99644

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:99641

***

### title?

> `optional` **title**: `string`

title of the item

#### Defined in

main.ts:99652

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:99650
