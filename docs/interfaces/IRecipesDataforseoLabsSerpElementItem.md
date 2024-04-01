[Documentation](../README.md) / [Exports](../modules.md) / IRecipesDataforseoLabsSerpElementItem

# Interface: IRecipesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

  ↳ **`IRecipesDataforseoLabsSerpElementItem`**

## Implemented by

- [`RecipesDataforseoLabsSerpElementItem`](../classes/RecipesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRecipesDataforseoLabsSerpElementItem.md#items)
- [position](IRecipesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IRecipesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IRecipesDataforseoLabsSerpElementItem.md#rank_group)
- [xpath](IRecipesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`RecipesElement`](../classes/RecipesElement.md)[]

elements of search results found in SERP

#### Defined in

main.ts:97515

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:97511

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:97507

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:97504

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:97513
