[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IMentionCarouselSerpElementItem

# Interface: IMentionCarouselSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IMentionCarouselSerpElementItem`**

## Implemented by

- [`MentionCarouselSerpElementItem`](../classes/MentionCarouselSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IMentionCarouselSerpElementItem.md#items)
- [position](IMentionCarouselSerpElementItem.md#position)
- [rank\_absolute](IMentionCarouselSerpElementItem.md#rank_absolute)
- [rank\_group](IMentionCarouselSerpElementItem.md#rank_group)
- [rectangle](IMentionCarouselSerpElementItem.md#rectangle)
- [title](IMentionCarouselSerpElementItem.md#title)
- [xpath](IMentionCarouselSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`MentionCarouselElement`](../classes/MentionCarouselElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:30957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30957)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:30951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30951)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:30947](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30947)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:30944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30944)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:30961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30961)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:30955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30955)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:30953](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L30953)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")