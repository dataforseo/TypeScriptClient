[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IFoundOnWebSerpElementItem

# Interface: IFoundOnWebSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IFoundOnWebSerpElementItem`**

## Implemented by

- [`FoundOnWebSerpElementItem`](../classes/FoundOnWebSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IFoundOnWebSerpElementItem.md#items)
- [position](IFoundOnWebSerpElementItem.md#position)
- [rank\_absolute](IFoundOnWebSerpElementItem.md#rank_absolute)
- [rank\_group](IFoundOnWebSerpElementItem.md#rank_group)
- [rectangle](IFoundOnWebSerpElementItem.md#rectangle)
- [related\_searches](IFoundOnWebSerpElementItem.md#related_searches)
- [title](IFoundOnWebSerpElementItem.md#title)
- [xpath](IFoundOnWebSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`FoundOnWebElement`](../classes/FoundOnWebElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:34887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34887)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:34879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34879)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:34875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34875)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:34872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34872)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:34891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34891)

___


### related\_searches

• `Optional` **related\_searches**: `string`[]

search queries related to the elment

#### Defined in

[main.ts:34885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34885)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:34883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34883)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:34881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L34881)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")