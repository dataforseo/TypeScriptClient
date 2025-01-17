[**Documentation**](../README.md)

***

[Documentation](../README.md) / IGoogleImageImagesSearchSerpElementItem

# Interface: IGoogleImageImagesSearchSerpElementItem

Defined in: main.ts:50953

## Extends

- [`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:50959

the alt tag of the image

***

### encoded\_url?

> `optional` **encoded\_url**: `string`

Defined in: main.ts:50965

the URL of the cached version of the image stored on Google’s servers

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:50805

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](IBaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:50802

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`rank_group`](IBaseGoogleImagesSerpElementItem.md#rank_group)

***

### source\_url?

> `optional` **source\_url**: `string`

Defined in: main.ts:50963

the URL of the source image

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: main.ts:50957

subtitle of the result in SERP

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:50955

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:50798

type of element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`type`](IBaseGoogleImagesSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:50961

search URL with refinement parameters

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:50807

the XPath of the element

#### Inherited from

[`IBaseGoogleImagesSerpElementItem`](IBaseGoogleImagesSerpElementItem.md).[`xpath`](IBaseGoogleImagesSerpElementItem.md#xpath)
