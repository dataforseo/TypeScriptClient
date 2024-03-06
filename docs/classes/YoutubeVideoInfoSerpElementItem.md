[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / YoutubeVideoInfoSerpElementItem

# Class: YoutubeVideoInfoSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)
  
  ↳ **`YoutubeVideoInfoSerpElementItem`**

## Implements

- [`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](YoutubeVideoInfoSerpElementItem.md#constructor)

### Properties

- [\_discriminator](YoutubeVideoInfoSerpElementItem.md#_discriminator)
- [category](YoutubeVideoInfoSerpElementItem.md#category)
- [channel\_id](YoutubeVideoInfoSerpElementItem.md#channel_id)
- [channel\_logo](YoutubeVideoInfoSerpElementItem.md#channel_logo)
- [channel\_name](YoutubeVideoInfoSerpElementItem.md#channel_name)
- [channel\_url](YoutubeVideoInfoSerpElementItem.md#channel_url)
- [comments\_count](YoutubeVideoInfoSerpElementItem.md#comments_count)
- [description](YoutubeVideoInfoSerpElementItem.md#description)
- [duration\_time](YoutubeVideoInfoSerpElementItem.md#duration_time)
- [duration\_time\_seconds](YoutubeVideoInfoSerpElementItem.md#duration_time_seconds)
- [is\_live](YoutubeVideoInfoSerpElementItem.md#is_live)
- [keywords](YoutubeVideoInfoSerpElementItem.md#keywords)
- [likes\_count](YoutubeVideoInfoSerpElementItem.md#likes_count)
- [publication\_date](YoutubeVideoInfoSerpElementItem.md#publication_date)
- [rank\_absolute](YoutubeVideoInfoSerpElementItem.md#rank_absolute)
- [rank\_group](YoutubeVideoInfoSerpElementItem.md#rank_group)
- [streaming\_quality](YoutubeVideoInfoSerpElementItem.md#streaming_quality)
- [subtitles](YoutubeVideoInfoSerpElementItem.md#subtitles)
- [thumbnail\_url](YoutubeVideoInfoSerpElementItem.md#thumbnail_url)
- [timestamp](YoutubeVideoInfoSerpElementItem.md#timestamp)
- [title](YoutubeVideoInfoSerpElementItem.md#title)
- [url](YoutubeVideoInfoSerpElementItem.md#url)
- [video\_id](YoutubeVideoInfoSerpElementItem.md#video_id)
- [views\_count](YoutubeVideoInfoSerpElementItem.md#views_count)

### Methods

- [init](YoutubeVideoInfoSerpElementItem.md#init)
- [toJSON](YoutubeVideoInfoSerpElementItem.md#tojson)
- [fromJS](YoutubeVideoInfoSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new YoutubeVideoInfoSerpElementItem**(`data?`): [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md) |

#### Returns

[`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

[main.ts:58636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58636)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19337)

___


### category

• `Optional` **category**: `string`

the category the video belongs to

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[category](../interfaces/IYoutubeVideoInfoSerpElementItem.md#category)

#### Defined in

[main.ts:58622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58622)

___


### channel\_id

• `Optional` **channel\_id**: `string`

the ID of the channel where the video is published

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[channel_id](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_id)

#### Defined in

[main.ts:58597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58597)

___


### channel\_logo

• `Optional` **channel\_logo**: `string`

the URL of the page where the logo image of the channel is hosted

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[channel_logo](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_logo)

#### Defined in

[main.ts:58603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58603)

___


### channel\_name

• `Optional` **channel\_name**: `string`

the name of the channel where the video is published

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[channel_name](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_name)

#### Defined in

[main.ts:58599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58599)

___


### channel\_url

• `Optional` **channel\_url**: `string`

the URL of the channel where the video is published

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[channel_url](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_url)

#### Defined in

[main.ts:58601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58601)

___


### comments\_count

• `Optional` **comments\_count**: `number`

number of comments on the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[comments_count](../interfaces/IYoutubeVideoInfoSerpElementItem.md#comments_count)

#### Defined in

[main.ts:58611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58611)

___


### description

• `Optional` **description**: `string`

description of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[description](../interfaces/IYoutubeVideoInfoSerpElementItem.md#description)

#### Defined in

[main.ts:58605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58605)

___


### duration\_time

• `Optional` **duration\_time**: `string`

duration of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[duration_time](../interfaces/IYoutubeVideoInfoSerpElementItem.md#duration_time)

#### Defined in

[main.ts:58626](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58626)

___


### duration\_time\_seconds

• `Optional` **duration\_time\_seconds**: `number`

duration of the video in seconds

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[duration_time_seconds](../interfaces/IYoutubeVideoInfoSerpElementItem.md#duration_time_seconds)

#### Defined in

[main.ts:58628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58628)

___


### is\_live

• `Optional` **is\_live**: `boolean`

indicates whether the video is on live

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[is_live](../interfaces/IYoutubeVideoInfoSerpElementItem.md#is_live)

#### Defined in

[main.ts:58624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58624)

___


### keywords

• `Optional` **keywords**: `string`[]

keywords relevant to the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[keywords](../interfaces/IYoutubeVideoInfoSerpElementItem.md#keywords)

#### Defined in

[main.ts:58620](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58620)

___


### likes\_count

• `Optional` **likes\_count**: `number`

number of likes on the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[likes_count](../interfaces/IYoutubeVideoInfoSerpElementItem.md#likes_count)

#### Defined in

[main.ts:58609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58609)

___


### publication\_date

• `Optional` **publication\_date**: `string`

the date when the video is published

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[publication_date](../interfaces/IYoutubeVideoInfoSerpElementItem.md#publication_date)

#### Defined in

[main.ts:58613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58613)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[rank_absolute](../interfaces/IYoutubeVideoInfoSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:58587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58587)

___


### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[rank_group](../interfaces/IYoutubeVideoInfoSerpElementItem.md#rank_group)

#### Defined in

[main.ts:58584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58584)

___


### streaming\_quality

• `Optional` **streaming\_quality**: [`StreamingQualityElement`](StreamingQualityElement.md)[]

array of elements that contain information about all possible streaming qualities of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[streaming_quality](../interfaces/IYoutubeVideoInfoSerpElementItem.md#streaming_quality)

#### Defined in

[main.ts:58632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58632)

___


### subtitles

• `Optional` **subtitles**: `string`

subtitles in the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[subtitles](../interfaces/IYoutubeVideoInfoSerpElementItem.md#subtitles)

#### Defined in

[main.ts:58630](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58630)

___


### thumbnail\_url

• `Optional` **thumbnail\_url**: `string`

the URL of the page where the thumbnail is hosted

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[thumbnail_url](../interfaces/IYoutubeVideoInfoSerpElementItem.md#thumbnail_url)

#### Defined in

[main.ts:58595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58595)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[timestamp](../interfaces/IYoutubeVideoInfoSerpElementItem.md#timestamp)

#### Defined in

[main.ts:58618](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58618)

___


### title

• `Optional` **title**: `string`

title of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[title](../interfaces/IYoutubeVideoInfoSerpElementItem.md#title)

#### Defined in

[main.ts:58591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58591)

___


### url

• `Optional` **url**: `string`

URL of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[url](../interfaces/IYoutubeVideoInfoSerpElementItem.md#url)

#### Defined in

[main.ts:58593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58593)

___


### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[video_id](../interfaces/IYoutubeVideoInfoSerpElementItem.md#video_id)

#### Defined in

[main.ts:58589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58589)

___


### views\_count

• `Optional` **views\_count**: `number`

number of views of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[views_count](../interfaces/IYoutubeVideoInfoSerpElementItem.md#views_count)

#### Defined in

[main.ts:58607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58607)

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

[main.ts:58641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58641)

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

[main.ts:58689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58689)

___


### fromJS

▸ **fromJS**(`data`): [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

[main.ts:58682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L58682)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")