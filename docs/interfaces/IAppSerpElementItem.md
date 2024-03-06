[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppSerpElementItem

# Interface: IAppSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IAppSerpElementItem`**

## Implemented by

- [`AppSerpElementItem`](../classes/AppSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IAppSerpElementItem.md#items)
- [position](IAppSerpElementItem.md#position)
- [rank\_absolute](IAppSerpElementItem.md#rank_absolute)
- [rank\_group](IAppSerpElementItem.md#rank_group)
- [rectangle](IAppSerpElementItem.md#rectangle)
- [xpath](IAppSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`AppElement`](../classes/AppElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:29771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29771)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:29767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29767)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:29763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29763)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:29760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29760)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:29775](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29775)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:29769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L29769)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")