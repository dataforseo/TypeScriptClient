[dataforseo-client](../README.md) / [Exports](../modules.md) / IRelatedSearchesSerpElementItem

# Interface: IRelatedSearchesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IRelatedSearchesSerpElementItem`**

## Implemented by

- [`RelatedSearchesSerpElementItem`](../classes/RelatedSearchesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IRelatedSearchesSerpElementItem.md#items)
- [position](IRelatedSearchesSerpElementItem.md#position)
- [rank\_absolute](IRelatedSearchesSerpElementItem.md#rank_absolute)
- [rank\_group](IRelatedSearchesSerpElementItem.md#rank_group)
- [rectangle](IRelatedSearchesSerpElementItem.md#rectangle)
- [xpath](IRelatedSearchesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: `string`[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:31237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31237)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:31233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31233)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:31229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31229)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:31226](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31226)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:31241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31241)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:31235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31235)
