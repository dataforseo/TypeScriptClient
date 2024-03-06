[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IProductConsiderationsSerpElementItem

# Interface: IProductConsiderationsSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IProductConsiderationsSerpElementItem`**

## Implemented by

- [`ProductConsiderationsSerpElementItem`](../classes/ProductConsiderationsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IProductConsiderationsSerpElementItem.md#items)
- [position](IProductConsiderationsSerpElementItem.md#position)
- [rank\_absolute](IProductConsiderationsSerpElementItem.md#rank_absolute)
- [rank\_group](IProductConsiderationsSerpElementItem.md#rank_group)
- [rectangle](IProductConsiderationsSerpElementItem.md#rectangle)
- [title](IProductConsiderationsSerpElementItem.md#title)
- [xpath](IProductConsiderationsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ProductConsiderationsElement`](../classes/ProductConsiderationsElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:34699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34699)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:34693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34693)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:34689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34689)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:34686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34686)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:34703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34703)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:34697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34697)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:34695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34695)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")