[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IImagesDataforseoLabsSerpElementItem

# Interface: IImagesDataforseoLabsSerpElementItem

## Hierarchy

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)
  
  ↳ **`IImagesDataforseoLabsSerpElementItem`**

## Implemented by

- [`ImagesDataforseoLabsSerpElementItem`](../classes/ImagesDataforseoLabsSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IImagesDataforseoLabsSerpElementItem.md#items)
- [position](IImagesDataforseoLabsSerpElementItem.md#position)
- [rank\_absolute](IImagesDataforseoLabsSerpElementItem.md#rank_absolute)
- [rank\_group](IImagesDataforseoLabsSerpElementItem.md#rank_group)
- [related\_image\_searches](IImagesDataforseoLabsSerpElementItem.md#related_image_searches)
- [title](IImagesDataforseoLabsSerpElementItem.md#title)
- [url](IImagesDataforseoLabsSerpElementItem.md#url)
- [xpath](IImagesDataforseoLabsSerpElementItem.md#xpath)

## Properties

### items

• `Optional` **items**: [`ImagesElement`](../classes/ImagesElement.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:94659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94659)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:94651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94651)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:94647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94647)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:94644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94644)

___


### related\_image\_searches

• `Optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](../classes/RelatedImageSearchesElement.md)[]

contains keywords and images related to the specified search term
if there are none, equals null

#### Defined in

[main.ts:94662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94662)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:94655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94655)

___


### url

• `Optional` **url**: `string`

URL link

#### Defined in

[main.ts:94657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94657)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:94653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L94653)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")