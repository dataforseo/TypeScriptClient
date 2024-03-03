[Documentation](../README.md) / [Exports](../modules.md) / IPopularProductsDataforseoLabsSerpElementItem

# Interface: IPopularProductsDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IPopularProductsDataforseoLabsSerpElementItem`**

## Implemented by

- [`PopularProductsDataforseoLabsSerpElementItem`](../classes/PopularProductsDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPopularProductsDataforseoLabsSerpElementItem.md#items)
- [position](IPopularProductsDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IPopularProductsDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IPopularProductsDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IPopularProductsDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PopularProductsElement`](../classes/PopularProductsElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:95564

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95560

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95556

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95553

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95562
