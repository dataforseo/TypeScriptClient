**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPeopleAlsoAskDataforseoLabsSerpElementItem

# Interface: IPeopleAlsoAskDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`PeopleAlsoAskElement`](../classes/PeopleAlsoAskElement.md)[]

elements of search results found in SERP

#### Source

main.ts:96097

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:96093

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:96089

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:96086

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:96082

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:96095
