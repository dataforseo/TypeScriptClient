[dataforseo-client](../README.md) / [Exports](../modules.md) / IShortVideosSerpElementItem

# Interface: IShortVideosSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IShortVideosSerpElementItem`**

## Implemented by

- [`ShortVideosSerpElementItem`](../classes/ShortVideosSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IShortVideosSerpElementItem.md#items)
- [position](IShortVideosSerpElementItem.md#position)
- [rank\_absolute](IShortVideosSerpElementItem.md#rank_absolute)
- [rank\_group](IShortVideosSerpElementItem.md#rank_group)
- [rectangle](IShortVideosSerpElementItem.md#rectangle)
- [title](IShortVideosSerpElementItem.md#title)
- [xpath](IShortVideosSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ShortVideosElement`](../classes/ShortVideosElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:34993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34993)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:34987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34987)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:34983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34983)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:34980](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34980)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:34997](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34997)

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:34991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34991)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:34989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34989)
