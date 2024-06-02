**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITwitterDataforseoLabsSerpElementItem

# Interface: ITwitterDataforseoLabsSerpElementItem

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`TwitterElement`](../classes/TwitterElement.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:95813

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:95804

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:95800

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:95797

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:95794

***

### title?

> **`optional`** **title**: `string`

title of the item

#### Source

main.ts:95808

***

### url?

> **`optional`** **url**: `string`

URL link

#### Source

main.ts:95810

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:95806
