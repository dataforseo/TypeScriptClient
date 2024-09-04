[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IRelatedSearchesMerchantSerpElementItem

# Interface: IRelatedSearchesMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:179213

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:179208

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:179204

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:179201

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:179210
