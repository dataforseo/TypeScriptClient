[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleImageImagesSearchSerpElementItem

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

main.ts:50959

***

### encoded\_url?

> `optional` **encoded\_url**: `string`

the URL of the cached version of the image stored on Google’s servers

#### Defined in

main.ts:50965

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](IBaseGoogleImagesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:50805

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_group`](IBaseGoogleImagesSerpElementItem.md#rank_group)

#### Defined in

main.ts:50802

***

### source\_url?

> `optional` **source\_url**: `string`

the URL of the source image

#### Defined in

main.ts:50963

***

### subtitle?

> `optional` **subtitle**: `string`

subtitle of the result in SERP

#### Defined in

main.ts:50957

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:50955

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`type`](IBaseGoogleImagesSerpElementItem.md#type)

#### Defined in

main.ts:50798

***

### url?

> `optional` **url**: `string`

search URL with refinement parameters

#### Defined in

main.ts:50961

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`xpath`](IBaseGoogleImagesSerpElementItem.md#xpath)

#### Defined in

main.ts:50807
