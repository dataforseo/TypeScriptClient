**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IEventsDataforseoLabsSerpElementItem

# Interface: IEventsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`EventsElement`](../classes/EventsElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:98378

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:98369

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:98365

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:98362

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:98373

***

### url?

> **`optional`** **url**: `string`

URL link

#### Source

main.ts:98375

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:98371
