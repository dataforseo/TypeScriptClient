[dataforseo-client](../README.md) / [Exports](../modules.md) / IRefineProductsSerpElementItem

# Interface: IRefineProductsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IRefineProductsSerpElementItem`**

## Implemented by

- [`RefineProductsSerpElementItem`](../classes/RefineProductsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRefineProductsSerpElementItem.md#items)
- [position](IRefineProductsSerpElementItem.md#position)
- [rank\_absolute](IRefineProductsSerpElementItem.md#rank_absolute)
- [rank\_group](IRefineProductsSerpElementItem.md#rank_group)
- [rectangle](IRefineProductsSerpElementItem.md#rectangle)
- [title](IRefineProductsSerpElementItem.md#title)
- [xpath](IRefineProductsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`RefineProductsElement`](../classes/RefineProductsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:35179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35179)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:35173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35173)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:35169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35169)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:35166](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35166)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:35183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35183)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:35177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35177)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:35175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35175)
