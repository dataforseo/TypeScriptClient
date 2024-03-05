[dataforseo-client](../README.md) / [Exports](../modules.md) / IAmazonRelatedSearchesSerpElementItem

# Interface: IAmazonRelatedSearchesSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

  ↳ **`IAmazonRelatedSearchesSerpElementItem`**

## Implemented by

- [`AmazonRelatedSearchesSerpElementItem`](../classes/AmazonRelatedSearchesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IAmazonRelatedSearchesSerpElementItem.md#items)
- [position](IAmazonRelatedSearchesSerpElementItem.md#position)
- [rank\_absolute](IAmazonRelatedSearchesSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonRelatedSearchesSerpElementItem.md#rank_group)
- [xpath](IAmazonRelatedSearchesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`RelatedSearchesElement`](../classes/RelatedSearchesElement.md)[]

Amazon product items

#### Defined in

[main.ts:171181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171181)

___

### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Defined in

[main.ts:171177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171177)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Defined in

[main.ts:171173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171173)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:171170](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171170)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:171179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171179)
