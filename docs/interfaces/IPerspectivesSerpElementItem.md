[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IPerspectivesSerpElementItem

# Interface: IPerspectivesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IPerspectivesSerpElementItem`**

## Implemented by

- [`PerspectivesSerpElementItem`](../classes/PerspectivesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IPerspectivesSerpElementItem.md#items)
- [position](IPerspectivesSerpElementItem.md#position)
- [rank\_absolute](IPerspectivesSerpElementItem.md#rank_absolute)
- [rank\_group](IPerspectivesSerpElementItem.md#rank_group)
- [rectangle](IPerspectivesSerpElementItem.md#rectangle)
- [title](IPerspectivesSerpElementItem.md#title)
- [xpath](IPerspectivesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`PerspectivesElement`](../classes/PerspectivesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:35577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35577)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:35571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35571)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:35567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35567)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:35564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35564)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:35581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35581)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:35575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35575)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:35573](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L35573)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")