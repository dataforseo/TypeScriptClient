[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IImagesSearchSerpElementItem

# Interface: IImagesSearchSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### alt?

> `optional` **alt**: `string`

the alt tag of the image

#### Defined in

main.ts:49394

***

### encoded\_url?

> `optional` **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Defined in

main.ts:49400

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

main.ts:49386

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:49383

***

### source\_url?

> `optional` **source\_url**: `string`

the URL of the source image

#### Defined in

main.ts:49398

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the result in SERP

#### Defined in

main.ts:49392

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:49390

***

### url?

> `optional` **url**: `string`

the URL of the page where the image is hosted

#### Defined in

main.ts:49396

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Defined in

main.ts:49388
