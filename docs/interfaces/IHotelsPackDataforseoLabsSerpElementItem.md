**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHotelsPackDataforseoLabsSerpElementItem

# Interface: IHotelsPackDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> **`optional`** **date\_from**: `string`

starting date of stay
in the format “year-month-date”
example:
2019-11-15

#### Source

main.ts:97148

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Source

main.ts:97153

***

### items?

> **`optional`** **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

elements of search results found in SERP

#### Source

main.ts:97155

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:97139

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:97135

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:97132

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:97143

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:97141
