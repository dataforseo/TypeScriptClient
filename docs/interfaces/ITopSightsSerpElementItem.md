[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ITopSightsSerpElementItem

# Interface: ITopSightsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`ITopSightsSerpElementItem`**

## Implemented by

- [`TopSightsSerpElementItem`](../classes/TopSightsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITopSightsSerpElementItem.md#items)
- [position](ITopSightsSerpElementItem.md#position)
- [rank\_absolute](ITopSightsSerpElementItem.md#rank_absolute)
- [rank\_group](ITopSightsSerpElementItem.md#rank_group)
- [rectangle](ITopSightsSerpElementItem.md#rectangle)
- [title](ITopSightsSerpElementItem.md#title)
- [xpath](ITopSightsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TopSightsElement`](../classes/TopSightsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:31785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31785)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:31779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31779)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:31775](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31775)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:31772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31772)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:31789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31789)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:31783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31783)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:31781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L31781)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")