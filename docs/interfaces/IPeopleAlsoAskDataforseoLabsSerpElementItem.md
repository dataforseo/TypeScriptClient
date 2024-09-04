[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IPeopleAlsoAskDataforseoLabsSerpElementItem

# Interface: IPeopleAlsoAskDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`PeopleAlsoAskElement`](../classes/PeopleAlsoAskElement.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:97444

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97439

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97435

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97432

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:97429

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97441
