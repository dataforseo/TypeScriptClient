[dataforseo-client](../README.md) / [Exports](../modules.md) / IRecipesDataforseoLabsSerpElementItem

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

[main.ts:95138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95138)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:95134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95134)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:95130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95130)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:95127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95127)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:95136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L95136)
