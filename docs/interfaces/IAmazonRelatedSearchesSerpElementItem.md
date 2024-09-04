[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAmazonRelatedSearchesSerpElementItem

# Interface: IAmazonRelatedSearchesSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`RelatedSearchesElement`](../classes/RelatedSearchesElement.md)[]

Amazon product items

#### Defined in

main.ts:185048

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Defined in

main.ts:185044

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Defined in

main.ts:185040

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:185037

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:185046
