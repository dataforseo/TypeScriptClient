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

main.ts:48862

***

### encoded\_url?

> **`optional`** **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Source

main.ts:48868

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Source

main.ts:48854

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:48851

***

### source\_url?

> **`optional`** **source\_url**: `string`

the URL of the source image

#### Source

main.ts:48866

***

### subtitle?

> **`optional`** **subtitle**: `string`

subtitle of the result in SERP

#### Source

main.ts:48860

***

### title?

> **`optional`** **title**: `string`

title of the result in SERP

#### Source

main.ts:48858

***

### url?

> **`optional`** **url**: `string`

the URL of the page where the image is hosted

#### Source

main.ts:48864

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Source

main.ts:48856
