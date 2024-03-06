[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IImagesSerpElementItem

# Interface: IImagesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IImagesSerpElementItem`**

## Implemented by

- [`ImagesSerpElementItem`](../classes/ImagesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IImagesSerpElementItem.md#items)
- [position](IImagesSerpElementItem.md#position)
- [rank\_absolute](IImagesSerpElementItem.md#rank_absolute)
- [rank\_group](IImagesSerpElementItem.md#rank_group)
- [rectangle](IImagesSerpElementItem.md#rectangle)
- [related\_image\_searches](IImagesSerpElementItem.md#related_image_searches)
- [title](IImagesSerpElementItem.md#title)
- [url](IImagesSerpElementItem.md#url)
- [xpath](IImagesSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ImagesElement`](../classes/ImagesElement.md)[]

contains results featured in the ‘hotels_pack’ element of SERP

#### Defined in

[main.ts:28970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28970)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:28962](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28962)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:28958](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28958)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:28955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28955)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:28977](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28977)

___


### related\_image\_searches

• `Optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](../classes/RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Defined in

[main.ts:28973](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28973)

___


### title

• `Optional` **title**: `string`

title of a given link element

#### Defined in

[main.ts:28966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28966)

___


### url

• `Optional` **url**: `string`

URL

#### Defined in

[main.ts:28968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28968)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:28964](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28964)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")