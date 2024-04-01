[Documentation](../README.md) / [Exports](../modules.md) / IAmazonEditorialRecommendationsSerpElementItem

# Interface: IAmazonEditorialRecommendationsSerpElementItem

## Hierarchy

- [`IBaseAmazonSerpElementItem`](IBaseAmazonSerpElementItem.md)

  ↳ **`IAmazonEditorialRecommendationsSerpElementItem`**

## Implemented by

- [`AmazonEditorialRecommendationsSerpElementItem`](../classes/AmazonEditorialRecommendationsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IAmazonEditorialRecommendationsSerpElementItem.md#items)
- [position](IAmazonEditorialRecommendationsSerpElementItem.md#position)
- [rank\_absolute](IAmazonEditorialRecommendationsSerpElementItem.md#rank_absolute)
- [rank\_group](IAmazonEditorialRecommendationsSerpElementItem.md#rank_group)
- [xpath](IAmazonEditorialRecommendationsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`AmazonSerpElement`](../classes/AmazonSerpElement.md)[]

Amazon product items

#### Defined in

main.ts:176546

___

### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
possible values:
left, right

#### Defined in

main.ts:176542

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Defined in

main.ts:176538

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:176535

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:176544
