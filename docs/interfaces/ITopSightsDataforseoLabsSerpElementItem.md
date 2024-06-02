**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITopSightsDataforseoLabsSerpElementItem

# Interface: ITopSightsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`TopSightsElement`](../classes/TopSightsElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:98660

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:98653

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:98649

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:98646

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:98657

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:98655
