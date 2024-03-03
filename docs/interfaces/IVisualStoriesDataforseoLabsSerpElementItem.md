[Documentation](../README.md) / [Exports](../modules.md) / IVisualStoriesDataforseoLabsSerpElementItem

# Interface: IVisualStoriesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IVisualStoriesDataforseoLabsSerpElementItem`**

## Implemented by

- [`VisualStoriesDataforseoLabsSerpElementItem`](../classes/VisualStoriesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IVisualStoriesDataforseoLabsSerpElementItem.md#items)
- [position](IVisualStoriesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IVisualStoriesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IVisualStoriesDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IVisualStoriesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`LicensesElement`](../classes/LicensesElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:96042

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:96038

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:96034

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:96031

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:96040
