**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleFlightsDataforseoLabsSerpElementItem

# Interface: IGoogleFlightsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`GoogleFlightsElement`](../classes/GoogleFlightsElement.md)[]

elements of search results found in SERP

#### Source

main.ts:96799

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:96791

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:96787

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:96784

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:96795

***

### url?

> **`optional`** **url**: `string`

relevant URL of the Ad element in SERP

#### Source

main.ts:96797

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:96793
