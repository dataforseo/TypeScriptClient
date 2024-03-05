[dataforseo-client](../README.md) / [Exports](../modules.md) / RelatedResult

# Class: RelatedResult

## Implements

- [`IRelatedResult`](../interfaces/IRelatedResult.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RelatedResult.md#constructor)

### Properties

- [about\_this\_result](RelatedResult.md#about_this_result)
- [amp\_version](RelatedResult.md#amp_version)
- [breadcrumb](RelatedResult.md#breadcrumb)
- [cache\_url](RelatedResult.md#cache_url)
- [description](RelatedResult.md#description)
- [domain](RelatedResult.md#domain)
- [extended\_snippet](RelatedResult.md#extended_snippet)
- [highlighted](RelatedResult.md#highlighted)
- [images](RelatedResult.md#images)
- [is\_image](RelatedResult.md#is_image)
- [is\_video](RelatedResult.md#is_video)
- [pre\_snippet](RelatedResult.md#pre_snippet)
- [price](RelatedResult.md#price)
- [rating](RelatedResult.md#rating)
- [related\_search\_url](RelatedResult.md#related_search_url)
- [timestamp](RelatedResult.md#timestamp)
- [title](RelatedResult.md#title)
- [type](RelatedResult.md#type)
- [url](RelatedResult.md#url)
- [website\_name](RelatedResult.md#website_name)
- [xpath](RelatedResult.md#xpath)

### Methods

- [init](RelatedResult.md#init)
- [toJSON](RelatedResult.md#tojson)
- [fromJS](RelatedResult.md#fromjs)

## Constructors

### constructor

• **new RelatedResult**(`data?`): [`RelatedResult`](RelatedResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRelatedResult`](../interfaces/IRelatedResult.md) |

#### Returns

[`RelatedResult`](RelatedResult.md)

#### Defined in

[main.ts:28019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28019)

## Properties

### about\_this\_result

• `Optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[about_this_result](../interfaces/IRelatedResult.md#about_this_result)

#### Defined in

[main.ts:28010](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28010)

___

### amp\_version

• `Optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[amp_version](../interfaces/IRelatedResult.md#amp_version)

#### Defined in

[main.ts:27998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27998)

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[breadcrumb](../interfaces/IRelatedResult.md#breadcrumb)

#### Defined in

[main.ts:27981](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27981)

___

### cache\_url

• `Optional` **cache\_url**: `string`

cached version of the page

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[cache_url](../interfaces/IRelatedResult.md#cache_url)

#### Defined in

[main.ts:27976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27976)

___

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[description](../interfaces/IRelatedResult.md#description)

#### Defined in

[main.ts:27989](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27989)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[domain](../interfaces/IRelatedResult.md#domain)

#### Defined in

[main.ts:27970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27970)

___

### extended\_snippet

• `Optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[extended_snippet](../interfaces/IRelatedResult.md#extended_snippet)

#### Defined in

[main.ts:27993](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27993)

___

### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[highlighted](../interfaces/IRelatedResult.md#highlighted)

#### Defined in

[main.ts:28006](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28006)

___

### images

• `Optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[images](../interfaces/IRelatedResult.md#images)

#### Defined in

[main.ts:27995](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27995)

___

### is\_image

• `Optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[is_image](../interfaces/IRelatedResult.md#is_image)

#### Defined in

[main.ts:27985](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27985)

___

### is\_video

• `Optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[is_video](../interfaces/IRelatedResult.md#is_video)

#### Defined in

[main.ts:27987](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27987)

___

### pre\_snippet

• `Optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[pre_snippet](../interfaces/IRelatedResult.md#pre_snippet)

#### Defined in

[main.ts:27991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27991)

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[price](../interfaces/IRelatedResult.md#price)

#### Defined in

[main.ts:28004](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28004)

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[rating](../interfaces/IRelatedResult.md#rating)

#### Defined in

[main.ts:28001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28001)

___

### related\_search\_url

• `Optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[related_search_url](../interfaces/IRelatedResult.md#related_search_url)

#### Defined in

[main.ts:27979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27979)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[timestamp](../interfaces/IRelatedResult.md#timestamp)

#### Defined in

[main.ts:28015](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28015)

___

### title

• `Optional` **title**: `string`

title of the element

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[title](../interfaces/IRelatedResult.md#title)

#### Defined in

[main.ts:27972](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27972)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[type](../interfaces/IRelatedResult.md#type)

#### Defined in

[main.ts:27966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27966)

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[url](../interfaces/IRelatedResult.md#url)

#### Defined in

[main.ts:27974](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27974)

___

### website\_name

• `Optional` **website\_name**: `string`

name of the website in SERP

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[website_name](../interfaces/IRelatedResult.md#website_name)

#### Defined in

[main.ts:27983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27983)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IRelatedResult](../interfaces/IRelatedResult.md).[xpath](../interfaces/IRelatedResult.md#xpath)

#### Defined in

[main.ts:27968](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27968)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:28028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28028)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:28073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28073)

___

### fromJS

▸ **fromJS**(`data`): [`RelatedResult`](RelatedResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RelatedResult`](RelatedResult.md)

#### Defined in

[main.ts:28066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L28066)
