[Documentation](../README.md) / [Exports](../modules.md) / IRelatedSearchesMerchantSerpElementItem

# Interface: IRelatedSearchesMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

  ↳ **`IRelatedSearchesMerchantSerpElementItem`**

## Implemented by

- [`RelatedSearchesMerchantSerpElementItem`](../classes/RelatedSearchesMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRelatedSearchesMerchantSerpElementItem.md#items)
- [position](IRelatedSearchesMerchantSerpElementItem.md#position)
- [rank\_absolute](IRelatedSearchesMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IRelatedSearchesMerchantSerpElementItem.md#rank_group)
- [xpath](IRelatedSearchesMerchantSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: `string`[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:170791

___

### position

• `Optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:170786

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:170782

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:170779

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:170788
