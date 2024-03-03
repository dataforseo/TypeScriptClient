[Documentation](../README.md) / [Exports](../modules.md) / IRecipesSerpElementItem

# Interface: IRecipesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IRecipesSerpElementItem`**

## Implemented by

- [`RecipesSerpElementItem`](../classes/RecipesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRecipesSerpElementItem.md#items)
- [position](IRecipesSerpElementItem.md#position)
- [rank\_absolute](IRecipesSerpElementItem.md#rank_absolute)
- [rank\_group](IRecipesSerpElementItem.md#rank_group)
- [rectangle](IRecipesSerpElementItem.md#rectangle)
- [xpath](IRecipesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`RecipesElement`](../classes/RecipesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

main.ts:31745

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:31741

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:31737

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:31734

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

main.ts:31749

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:31743
