**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ICommercialUnitsDataforseoLabsSerpElementItem

# Interface: ICommercialUnitsDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`CommercialUnitsElement`](../classes/CommercialUnitsElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:100156

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:100149

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:100145

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:100142

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:100153

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:100151
