[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OrganicSerpElementItem

# Class: OrganicSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`OrganicSerpElementItem`**

## Implements

- [`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OrganicSerpElementItem.md#constructor)

### Properties

- [\_discriminator](OrganicSerpElementItem.md#_discriminator)
- [about\_this\_result](OrganicSerpElementItem.md#about_this_result)
- [amp\_version](OrganicSerpElementItem.md#amp_version)
- [breadcrumb](OrganicSerpElementItem.md#breadcrumb)
- [cache\_url](OrganicSerpElementItem.md#cache_url)
- [description](OrganicSerpElementItem.md#description)
- [domain](OrganicSerpElementItem.md#domain)
- [extended\_people\_also\_search](OrganicSerpElementItem.md#extended_people_also_search)
- [extended\_snippet](OrganicSerpElementItem.md#extended_snippet)
- [faq](OrganicSerpElementItem.md#faq)
- [highlighted](OrganicSerpElementItem.md#highlighted)
- [images](OrganicSerpElementItem.md#images)
- [is\_featured\_snippet](OrganicSerpElementItem.md#is_featured_snippet)
- [is\_image](OrganicSerpElementItem.md#is_image)
- [is\_malicious](OrganicSerpElementItem.md#is_malicious)
- [is\_video](OrganicSerpElementItem.md#is_video)
- [is\_web\_story](OrganicSerpElementItem.md#is_web_story)
- [links](OrganicSerpElementItem.md#links)
- [position](OrganicSerpElementItem.md#position)
- [pre\_snippet](OrganicSerpElementItem.md#pre_snippet)
- [price](OrganicSerpElementItem.md#price)
- [rank\_absolute](OrganicSerpElementItem.md#rank_absolute)
- [rank\_group](OrganicSerpElementItem.md#rank_group)
- [rating](OrganicSerpElementItem.md#rating)
- [rectangle](OrganicSerpElementItem.md#rectangle)
- [related\_result](OrganicSerpElementItem.md#related_result)
- [related\_search\_url](OrganicSerpElementItem.md#related_search_url)
- [timestamp](OrganicSerpElementItem.md#timestamp)
- [title](OrganicSerpElementItem.md#title)
- [url](OrganicSerpElementItem.md#url)
- [website\_name](OrganicSerpElementItem.md#website_name)
- [xpath](OrganicSerpElementItem.md#xpath)

### Methods

- [init](OrganicSerpElementItem.md#init)
- [toJSON](OrganicSerpElementItem.md#tojson)
- [fromJS](OrganicSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new OrganicSerpElementItem**(`data?`): [`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOrganicSerpElementItem`](../interfaces/IOrganicSerpElementItem.md) |

#### Returns

[`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:25460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25460)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### about\_this\_result

• `Optional` **about\_this\_result**: [`AboutThisResultElement`](AboutThisResultElement.md)

contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[about_this_result](../interfaces/IOrganicSerpElementItem.md#about_this_result)

#### Defined in

[main.ts:25443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25443)

___


### amp\_version

• `Optional` **amp\_version**: `boolean`

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[amp_version](../interfaces/IOrganicSerpElementItem.md#amp_version)

#### Defined in

[main.ts:25419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25419)

___


### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[breadcrumb](../interfaces/IOrganicSerpElementItem.md#breadcrumb)

#### Defined in

[main.ts:25396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25396)

___


### cache\_url

• `Optional` **cache\_url**: `string`

cached version of the page

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[cache_url](../interfaces/IOrganicSerpElementItem.md#cache_url)

#### Defined in

[main.ts:25391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25391)

___


### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[description](../interfaces/IOrganicSerpElementItem.md#description)

#### Defined in

[main.ts:25410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25410)

___


### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[domain](../interfaces/IOrganicSerpElementItem.md#domain)

#### Defined in

[main.ts:25385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25385)

___


### extended\_people\_also\_search

• `Optional` **extended\_people\_also\_search**: `string`[]

extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[extended_people_also_search](../interfaces/IOrganicSerpElementItem.md#extended_people_also_search)

#### Defined in

[main.ts:25439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25439)

___


### extended\_snippet

• `Optional` **extended\_snippet**: `string`

includes additional information appended after the result description in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[extended_snippet](../interfaces/IOrganicSerpElementItem.md#extended_snippet)

#### Defined in

[main.ts:25414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25414)

___


### faq

• `Optional` **faq**: [`FaqBox`](FaqBox.md)

frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[faq](../interfaces/IOrganicSerpElementItem.md#faq)

#### Defined in

[main.ts:25435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25435)

___


### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[highlighted](../interfaces/IOrganicSerpElementItem.md#highlighted)

#### Defined in

[main.ts:25427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25427)

___


### images

• `Optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[images](../interfaces/IOrganicSerpElementItem.md#images)

#### Defined in

[main.ts:25416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25416)

___


### is\_featured\_snippet

• `Optional` **is\_featured\_snippet**: `boolean`

indicates whether the element is a featured_snippet

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[is_featured_snippet](../interfaces/IOrganicSerpElementItem.md#is_featured_snippet)

#### Defined in

[main.ts:25404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25404)

___


### is\_image

• `Optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[is_image](../interfaces/IOrganicSerpElementItem.md#is_image)

#### Defined in

[main.ts:25400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25400)

___


### is\_malicious

• `Optional` **is\_malicious**: `boolean`

indicates whether the element is marked as malicious

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[is_malicious](../interfaces/IOrganicSerpElementItem.md#is_malicious)

#### Defined in

[main.ts:25406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25406)

___


### is\_video

• `Optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[is_video](../interfaces/IOrganicSerpElementItem.md#is_video)

#### Defined in

[main.ts:25402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25402)

___


### is\_web\_story

• `Optional` **is\_web\_story**: `boolean`

indicates whether the element is marked as Google web story

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[is_web_story](../interfaces/IOrganicSerpElementItem.md#is_web_story)

#### Defined in

[main.ts:25408](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25408)

___


### links

• `Optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[links](../interfaces/IOrganicSerpElementItem.md#links)

#### Defined in

[main.ts:25431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25431)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[position](../interfaces/IOrganicSerpElementItem.md#position)

#### Defined in

[main.ts:25381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25381)

___


### pre\_snippet

• `Optional` **pre\_snippet**: `string`

includes additional information appended before the result description in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[pre_snippet](../interfaces/IOrganicSerpElementItem.md#pre_snippet)

#### Defined in

[main.ts:25412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25412)

___


### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[price](../interfaces/IOrganicSerpElementItem.md#price)

#### Defined in

[main.ts:25425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25425)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[rank_absolute](../interfaces/IOrganicSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:25377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25377)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[rank_group](../interfaces/IOrganicSerpElementItem.md#rank_group)

#### Defined in

[main.ts:25374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25374)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[rating](../interfaces/IOrganicSerpElementItem.md#rating)

#### Defined in

[main.ts:25422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25422)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[rectangle](../interfaces/IOrganicSerpElementItem.md#rectangle)

#### Defined in

[main.ts:25456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25456)

___


### related\_result

• `Optional` **related\_result**: [`RelatedResult`](RelatedResult.md)[]

related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as "type": "organic" results by setting the group_organic_results parameter to false in the POST request

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[related_result](../interfaces/IOrganicSerpElementItem.md#related_result)

#### Defined in

[main.ts:25447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25447)

___


### related\_search\_url

• `Optional` **related\_search\_url**: `string`

URL to a similar search
URL to a new search for the same keyword(s) on related sites

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[related_search_url](../interfaces/IOrganicSerpElementItem.md#related_search_url)

#### Defined in

[main.ts:25394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25394)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[timestamp](../interfaces/IOrganicSerpElementItem.md#timestamp)

#### Defined in

[main.ts:25452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25452)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[title](../interfaces/IOrganicSerpElementItem.md#title)

#### Defined in

[main.ts:25387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25387)

___


### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[url](../interfaces/IOrganicSerpElementItem.md#url)

#### Defined in

[main.ts:25389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25389)

___


### website\_name

• `Optional` **website\_name**: `string`

name of the website in SERP

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[website_name](../interfaces/IOrganicSerpElementItem.md#website_name)

#### Defined in

[main.ts:25398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25398)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IOrganicSerpElementItem](../interfaces/IOrganicSerpElementItem.md).[xpath](../interfaces/IOrganicSerpElementItem.md#xpath)

#### Defined in

[main.ts:25383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25383)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

[main.ts:25465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25465)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

[main.ts:25533](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25533)

___


### fromJS

▸ **fromJS**(`data`): [`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OrganicSerpElementItem`](OrganicSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:25526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25526)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")