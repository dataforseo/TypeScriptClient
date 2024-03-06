[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ILocalServicesSerpElementItem

# Interface: ILocalServicesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`ILocalServicesSerpElementItem`**

## Implemented by

- [`LocalServicesSerpElementItem`](../classes/LocalServicesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](ILocalServicesSerpElementItem.md#domain)
- [items](ILocalServicesSerpElementItem.md#items)
- [position](ILocalServicesSerpElementItem.md#position)
- [rank\_absolute](ILocalServicesSerpElementItem.md#rank_absolute)
- [rank\_group](ILocalServicesSerpElementItem.md#rank_group)
- [rectangle](ILocalServicesSerpElementItem.md#rectangle)
- [title](ILocalServicesSerpElementItem.md#title)
- [url](ILocalServicesSerpElementItem.md#url)
- [xpath](ILocalServicesSerpElementItem.md#xpath)

## Properties

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

[main.ts:33775](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33775)

___


### items

• `Optional` **items**: [`LocalServicesElement`](../classes/LocalServicesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:33777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33777)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:33767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33767)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:33763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33763)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:33760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33760)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:33781](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33781)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:33771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33771)

___


### url

• `Optional` **url**: `string`

URL

#### Defined in

[main.ts:33773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33773)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:33769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L33769)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")