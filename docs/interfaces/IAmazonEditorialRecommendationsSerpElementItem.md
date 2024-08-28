[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAmazonEditorialRecommendationsSerpElementItem

# Interface: IAmazonEditorialRecommendationsSerpElementItem

## Extends

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`AmazonSerpElement`](../classes/AmazonSerpElement.md)[]

Amazon product items

#### Defined in

main.ts:184960

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Defined in

main.ts:184956

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Defined in

main.ts:184952

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:184949

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:184958
