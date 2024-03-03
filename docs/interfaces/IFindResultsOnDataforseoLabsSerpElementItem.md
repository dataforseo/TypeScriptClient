[Documentation](../README.md) / [Exports](../modules.md) / IFindResultsOnDataforseoLabsSerpElementItem

# Interface: IFindResultsOnDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IFindResultsOnDataforseoLabsSerpElementItem`**

## Implemented by

- [`FindResultsOnDataforseoLabsSerpElementItem`](../classes/FindResultsOnDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IFindResultsOnDataforseoLabsSerpElementItem.md#items)
- [position](IFindResultsOnDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IFindResultsOnDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IFindResultsOnDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IFindResultsOnDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ShortVideosElement`](../classes/ShortVideosElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:95828

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:95824

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:95820

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:95817

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:95826
