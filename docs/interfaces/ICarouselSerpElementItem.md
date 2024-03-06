[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ICarouselSerpElementItem

# Interface: ICarouselSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`ICarouselSerpElementItem`**

## Implemented by

- [`CarouselSerpElementItem`](../classes/CarouselSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](ICarouselSerpElementItem.md#items)
- [position](ICarouselSerpElementItem.md#position)
- [rank\_absolute](ICarouselSerpElementItem.md#rank_absolute)
- [rank\_group](ICarouselSerpElementItem.md#rank_group)
- [rectangle](ICarouselSerpElementItem.md#rectangle)
- [title](ICarouselSerpElementItem.md#title)
- [xpath](ICarouselSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`CarouselElement`](../classes/CarouselElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:30081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30081)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:30075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30075)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:30071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30071)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:30068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30068)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:30085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30085)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:30079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30079)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:30077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30077)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")