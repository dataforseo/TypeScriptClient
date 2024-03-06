[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IRecipesSerpElementItem

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

[main.ts:31603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31603)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:31599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31599)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:31595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31595)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:31592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31592)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:31607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31607)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:31601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31601)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")