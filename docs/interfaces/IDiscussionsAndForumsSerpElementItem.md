[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDiscussionsAndForumsSerpElementItem

# Interface: IDiscussionsAndForumsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IDiscussionsAndForumsSerpElementItem`**

## Implemented by

- [`DiscussionsAndForumsSerpElementItem`](../classes/DiscussionsAndForumsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDiscussionsAndForumsSerpElementItem.md#items)
- [position](IDiscussionsAndForumsSerpElementItem.md#position)
- [rank\_absolute](IDiscussionsAndForumsSerpElementItem.md#rank_absolute)
- [rank\_group](IDiscussionsAndForumsSerpElementItem.md#rank_group)
- [rectangle](IDiscussionsAndForumsSerpElementItem.md#rectangle)
- [title](IDiscussionsAndForumsSerpElementItem.md#title)
- [xpath](IDiscussionsAndForumsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`DiscussionsAndForumsElement`](../classes/DiscussionsAndForumsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:35783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35783)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:35777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35777)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:35773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35773)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:35770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35770)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:35787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35787)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:35781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35781)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:35779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35779)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")