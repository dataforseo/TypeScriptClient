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

main.ts:98286

***

### date\_to?

> **`optional`** **date\_to**: `string`

ending date of stay
in the format “year-month-date”
example:
2019-11-17

#### Source

main.ts:98291

***

### items?

> **`optional`** **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:98294

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:98277

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:98273

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:98270

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:98281

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:98279
