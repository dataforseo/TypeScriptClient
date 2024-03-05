[dataforseo-client](../README.md) / [Exports](../modules.md) / PaidSerpElementItem

# Class: PaidSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`PaidSerpElementItem`**

## Implements

- [`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PaidSerpElementItem.md#constructor)

### Properties

- [\_discriminator](PaidSerpElementItem.md#_discriminator)
- [breadcrumb](PaidSerpElementItem.md#breadcrumb)
- [description](PaidSerpElementItem.md#description)
- [description\_rows](PaidSerpElementItem.md#description_rows)
- [domain](PaidSerpElementItem.md#domain)
- [extra](PaidSerpElementItem.md#extra)
- [highlighted](PaidSerpElementItem.md#highlighted)
- [images](PaidSerpElementItem.md#images)
- [is\_image](PaidSerpElementItem.md#is_image)
- [is\_video](PaidSerpElementItem.md#is_video)
- [links](PaidSerpElementItem.md#links)
- [position](PaidSerpElementItem.md#position)
- [price](PaidSerpElementItem.md#price)
- [rank\_absolute](PaidSerpElementItem.md#rank_absolute)
- [rank\_group](PaidSerpElementItem.md#rank_group)
- [rectangle](PaidSerpElementItem.md#rectangle)
- [title](PaidSerpElementItem.md#title)
- [url](PaidSerpElementItem.md#url)
- [website\_name](PaidSerpElementItem.md#website_name)
- [xpath](PaidSerpElementItem.md#xpath)

### Methods

- [init](PaidSerpElementItem.md#init)
- [toJSON](PaidSerpElementItem.md#tojson)
- [fromJS](PaidSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new PaidSerpElementItem**(`data?`): [`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md) |

#### Returns

[`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:25201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25201)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___

### breadcrumb

• `Optional` **breadcrumb**: `string`

breadcrumb in SERP

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[breadcrumb](../interfaces/IPaidSerpElementItem.md#breadcrumb)

#### Defined in

[main.ts:25167](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25167)

___

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[description](../interfaces/IPaidSerpElementItem.md#description)

#### Defined in

[main.ts:25181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25181)

___

### description\_rows

• `Optional` **description\_rows**: `string`[]

extended description
if there is none, equals null

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[description_rows](../interfaces/IPaidSerpElementItem.md#description_rows)

#### Defined in

[main.ts:25184](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25184)

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[domain](../interfaces/IPaidSerpElementItem.md#domain)

#### Defined in

[main.ts:25165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25165)

___

### extra

• `Optional` **extra**: `Object`

additional information about the result

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[extra](../interfaces/IPaidSerpElementItem.md#extra)

#### Defined in

[main.ts:25179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25179)

___

### highlighted

• `Optional` **highlighted**: `string`[]

words highlighted in bold within the results description

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[highlighted](../interfaces/IPaidSerpElementItem.md#highlighted)

#### Defined in

[main.ts:25177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25177)

___

### images

• `Optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images of the element

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[images](../interfaces/IPaidSerpElementItem.md#images)

#### Defined in

[main.ts:25173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25173)

___

### is\_image

• `Optional` **is\_image**: `boolean`

indicates whether the element contains an image

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[is_image](../interfaces/IPaidSerpElementItem.md#is_image)

#### Defined in

[main.ts:25169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25169)

___

### is\_video

• `Optional` **is\_video**: `boolean`

indicates whether the element contains a video

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[is_video](../interfaces/IPaidSerpElementItem.md#is_video)

#### Defined in

[main.ts:25171](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25171)

___

### links

• `Optional` **links**: [`AdLinkElement`](AdLinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[links](../interfaces/IPaidSerpElementItem.md#links)

#### Defined in

[main.ts:25188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25188)

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[position](../interfaces/IPaidSerpElementItem.md#position)

#### Defined in

[main.ts:25159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25159)

___

### price

• `Optional` **price**: [`PriceInfo`](PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[price](../interfaces/IPaidSerpElementItem.md#price)

#### Defined in

[main.ts:25191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25191)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[rank_absolute](../interfaces/IPaidSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:25155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25155)

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[rank_group](../interfaces/IPaidSerpElementItem.md#rank_group)

#### Defined in

[main.ts:25152](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25152)

___

### rectangle

• `Optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[rectangle](../interfaces/IPaidSerpElementItem.md#rectangle)

#### Defined in

[main.ts:25195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25195)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[title](../interfaces/IPaidSerpElementItem.md#title)

#### Defined in

[main.ts:25163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25163)

___

### url

• `Optional` **url**: `string`

relevant URL in SERP

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[url](../interfaces/IPaidSerpElementItem.md#url)

#### Defined in

[main.ts:25175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25175)

___

### website\_name

• `Optional` **website\_name**: `string`

website name in SERP

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[website_name](../interfaces/IPaidSerpElementItem.md#website_name)

#### Defined in

[main.ts:25197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25197)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IPaidSerpElementItem](../interfaces/IPaidSerpElementItem.md).[xpath](../interfaces/IPaidSerpElementItem.md#xpath)

#### Defined in

[main.ts:25161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25161)

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

[main.ts:25206](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25206)

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

[main.ts:25264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25264)

___

### fromJS

▸ **fromJS**(`data`): [`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:25257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L25257)
