[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ITopStoriesSerpElementItem

# Interface: ITopStoriesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`ITopStoriesSerpElementItem`**

## Implemented by

- [`TopStoriesSerpElementItem`](../classes/TopStoriesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ITopStoriesSerpElementItem.md#items)
- [position](ITopStoriesSerpElementItem.md#position)
- [rank\_absolute](ITopStoriesSerpElementItem.md#rank_absolute)
- [rank\_group](ITopStoriesSerpElementItem.md#rank_group)
- [rectangle](ITopStoriesSerpElementItem.md#rectangle)
- [title](ITopStoriesSerpElementItem.md#title)
- [xpath](ITopStoriesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`TopStoriesElement`](../classes/TopStoriesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:28367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28367)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:28361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28361)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:28357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28357)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:28354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28354)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:28371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28371)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:28365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28365)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:28363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28363)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")