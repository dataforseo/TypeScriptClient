**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAmazonRelatedSearchesSerpElementItem

# Interface: IAmazonRelatedSearchesSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`RelatedSearchesElement`](../classes/RelatedSearchesElement.md)[]

Amazon product items

#### Source

main.ts:180523

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Source

main.ts:180519

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Source

main.ts:180515

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:180512

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:180521
