[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IGoogleImageImagesSearchSerpElementItem

# Interface: IGoogleImageImagesSearchSerpElementItem

## Extends

- [`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### alt?

> `optional` **alt**: `string`

the alt tag of the image

#### Defined in

main.ts:47765

***

### encoded\_url?

> `optional` **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Defined in

main.ts:47771

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](IBaseGoogleImagesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:47611

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_group`](IBaseGoogleImagesSerpElementItem.md#rank_group)

#### Defined in

main.ts:47608

***

### source\_url?

> `optional` **source\_url**: `string`

the URL of the source image

#### Defined in

main.ts:47769

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the result in SERP

#### Defined in

main.ts:47763

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:47761

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`type`](IBaseGoogleImagesSerpElementItem.md#type)

#### Defined in

main.ts:47604

***

### url?

> `optional` **url**: `string`

the URL of the page where the image is hosted

#### Defined in

main.ts:47767

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`xpath`](IBaseGoogleImagesSerpElementItem.md#xpath)

#### Defined in

main.ts:47613
