**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IImagesSearchSerpElementItem

# Interface: IImagesSearchSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### alt?

> **`optional`** **alt**: `string`

the alt tag of the image

#### Source

main.ts:48024

***

### encoded\_url?

> **`optional`** **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Source

main.ts:48030

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Source

main.ts:48016

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:48013

***

### source\_url?

> **`optional`** **source\_url**: `string`

the URL of the source image

#### Source

main.ts:48028

***

### subtitle?

> **`optional`** **subtitle**: `string`

subtitle of the result in SERP

#### Source

main.ts:48022

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:48020

***

### url?

> **`optional`** **url**: `string`

the URL of the page where the image is hosted

#### Source

main.ts:48026

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:48018
