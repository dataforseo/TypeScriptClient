[dataforseo-client](../README.md) / [Exports](../modules.md) / IPopularProductsSerpElementItem

# Interface: IPopularProductsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IPopularProductsSerpElementItem`**

## Implemented by

- [`PopularProductsSerpElementItem`](../classes/PopularProductsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPopularProductsSerpElementItem.md#items)
- [position](IPopularProductsSerpElementItem.md#position)
- [rank\_absolute](IPopularProductsSerpElementItem.md#rank_absolute)
- [rank\_group](IPopularProductsSerpElementItem.md#rank_group)
- [rectangle](IPopularProductsSerpElementItem.md#rectangle)
- [xpath](IPopularProductsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PopularProductsElement`](../classes/PopularProductsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:32147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32147)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:32143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32143)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:32139](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32139)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:32136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32136)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:32151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32151)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:32145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L32145)
