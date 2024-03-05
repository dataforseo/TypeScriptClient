[dataforseo-client](../README.md) / [Exports](../modules.md) / IImagesSearchSerpElementItem

# Interface: IImagesSearchSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IImagesSearchSerpElementItem`**

## Implemented by

- [`ImagesSearchSerpElementItem`](../classes/ImagesSearchSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [alt](IImagesSearchSerpElementItem.md#alt)
- [encoded\_url](IImagesSearchSerpElementItem.md#encoded_url)
- [rank\_absolute](IImagesSearchSerpElementItem.md#rank_absolute)
- [rank\_group](IImagesSearchSerpElementItem.md#rank_group)
- [source\_url](IImagesSearchSerpElementItem.md#source_url)
- [subtitle](IImagesSearchSerpElementItem.md#subtitle)
- [title](IImagesSearchSerpElementItem.md#title)
- [url](IImagesSearchSerpElementItem.md#url)
- [xpath](IImagesSearchSerpElementItem.md#xpath)

## Properties

### alt

• `Optional` **alt**: `string`

the alt tag of the image

#### Defined in

[main.ts:46185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46185)

___

### encoded\_url

• `Optional` **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Defined in

[main.ts:46191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46191)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

[main.ts:46177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46177)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:46174](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46174)

___

### source\_url

• `Optional` **source\_url**: `string`

the URL of the source image

#### Defined in

[main.ts:46189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46189)

___

### subtitle

• `Optional` **subtitle**: `string`

subtitle of the result in SERP

#### Defined in

[main.ts:46183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46183)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:46181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46181)

___

### url

• `Optional` **url**: `string`

the URL of the page where the image is hosted

#### Defined in

[main.ts:46187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46187)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:46179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46179)
