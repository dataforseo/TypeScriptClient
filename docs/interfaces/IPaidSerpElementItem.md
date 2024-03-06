[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IPaidSerpElementItem

# Interface: IPaidSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)
  
  ↳ **`IPaidSerpElementItem`**

## Implemented by

- [`PaidSerpElementItem`](../classes/PaidSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [breadcrumb](IPaidSerpElementItem.md#breadcrumb)
- [description](IPaidSerpElementItem.md#description)
- [description\_rows](IPaidSerpElementItem.md#description_rows)
- [domain](IPaidSerpElementItem.md#domain)
- [extra](IPaidSerpElementItem.md#extra)
- [highlighted](IPaidSerpElementItem.md#highlighted)
- [images](IPaidSerpElementItem.md#images)
- [is\_image](IPaidSerpElementItem.md#is_image)
- [is\_video](IPaidSerpElementItem.md#is_video)
- [links](IPaidSerpElementItem.md#links)
- [position](IPaidSerpElementItem.md#position)
- [price](IPaidSerpElementItem.md#price)
- [rank\_absolute](IPaidSerpElementItem.md#rank_absolute)
- [rank\_group](IPaidSerpElementItem.md#rank_group)
- [rectangle](IPaidSerpElementItem.md#rectangle)
- [title](IPaidSerpElementItem.md#title)
- [url](IPaidSerpElementItem.md#url)
- [website\_name](IPaidSerpElementItem.md#website_name)
- [xpath](IPaidSerpElementItem.md#xpath)

## Properties

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Defined in

[main.ts:25335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25335)

___


### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

[main.ts:25349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25349)

___


### description\_rows

• `Optional` **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Defined in

[main.ts:25352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25352)

___


### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

[main.ts:25333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25333)

___


### extra

• `Optional` **extra**: `Object`

additional information about the result

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:25347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25347)

___


### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Defined in

[main.ts:25345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25345)

___


### images

• `Optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

[main.ts:25341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25341)

___


### is\_image

• `Optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Defined in

[main.ts:25337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25337)

___


### is\_video

• `Optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Defined in

[main.ts:25339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25339)

___


### links

• `Optional` **links**: [`AdLinkElement`](../classes/AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Defined in

[main.ts:25356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25356)

___


### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:25327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25327)

___


### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Defined in

[main.ts:25359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25359)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

[main.ts:25323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25323)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:25320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25320)

___


### rectangle

• `Optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Defined in

[main.ts:25363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25363)

___


### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:25331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25331)

___


### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Defined in

[main.ts:25343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25343)

___


### website\_name

• `Optional` **website\_name**: `string`

website name in SERP

#### Defined in

[main.ts:25365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25365)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Defined in

[main.ts:25329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25329)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")