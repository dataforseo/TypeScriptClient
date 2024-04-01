[Documentation](../README.md) / [Exports](../modules.md) / IImagesSearchSerpElementItem

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

main.ts:46936

___

### encoded\_url

• `Optional` **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Defined in

main.ts:46942

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

main.ts:46928

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:46925

___

### source\_url

• `Optional` **source\_url**: `string`

the URL of the source image

#### Defined in

main.ts:46940

___

### subtitle

• `Optional` **subtitle**: `string`

subtitle of the result in SERP

#### Defined in

main.ts:46934

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:46932

___

### url

• `Optional` **url**: `string`

the URL of the page where the image is hosted

#### Defined in

main.ts:46938

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:46930
