[Documentation](../README.md) / [Exports](../modules.md) / YoutubeVideoInfoSerpElementItem

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

main.ts:58780

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### category

• `Optional` **category**: `string`

the category the video belongs to

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[category](../interfaces/IYoutubeVideoInfoSerpElementItem.md#category)

#### Defined in

main.ts:58766

___

### channel\_id

• `Optional` **channel\_id**: `string`

the ID of the channel where the video is published

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[channel_id](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_id)

#### Defined in

main.ts:58741

___

### channel\_logo

• `Optional` **channel\_logo**: `string`

the URL of the page where the logo image of the channel is hosted

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[channel_logo](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_logo)

#### Defined in

main.ts:58747

___

### channel\_name

• `Optional` **channel\_name**: `string`

the name of the channel where the video is published

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[channel_name](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_name)

#### Defined in

main.ts:58743

___

### channel\_url

• `Optional` **channel\_url**: `string`

the URL of the channel where the video is published

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[channel_url](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_url)

#### Defined in

main.ts:58745

___

### comments\_count

• `Optional` **comments\_count**: `number`

number of comments on the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[comments_count](../interfaces/IYoutubeVideoInfoSerpElementItem.md#comments_count)

#### Defined in

main.ts:58755

___

### description

• `Optional` **description**: `string`

description of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[description](../interfaces/IYoutubeVideoInfoSerpElementItem.md#description)

#### Defined in

main.ts:58749

___

### duration\_time

• `Optional` **duration\_time**: `string`

duration of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[duration_time](../interfaces/IYoutubeVideoInfoSerpElementItem.md#duration_time)

#### Defined in

main.ts:58770

___

### duration\_time\_seconds

• `Optional` **duration\_time\_seconds**: `number`

duration of the video in seconds

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[duration_time_seconds](../interfaces/IYoutubeVideoInfoSerpElementItem.md#duration_time_seconds)

#### Defined in

main.ts:58772

___

### is\_live

• `Optional` **is\_live**: `boolean`

indicates whether the video is on live

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[is_live](../interfaces/IYoutubeVideoInfoSerpElementItem.md#is_live)

#### Defined in

main.ts:58768

___

### keywords

• `Optional` **keywords**: `string`[]

keywords relevant to the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[keywords](../interfaces/IYoutubeVideoInfoSerpElementItem.md#keywords)

#### Defined in

main.ts:58764

___

### likes\_count

• `Optional` **likes\_count**: `number`

number of likes on the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[likes_count](../interfaces/IYoutubeVideoInfoSerpElementItem.md#likes_count)

#### Defined in

main.ts:58753

___

### publication\_date

• `Optional` **publication\_date**: `string`

the date when the video is published

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[publication_date](../interfaces/IYoutubeVideoInfoSerpElementItem.md#publication_date)

#### Defined in

main.ts:58757

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[rank_absolute](../interfaces/IYoutubeVideoInfoSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:58731

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[rank_group](../interfaces/IYoutubeVideoInfoSerpElementItem.md#rank_group)

#### Defined in

main.ts:58728

___

### streaming\_quality

• `Optional` **streaming\_quality**: [`StreamingQualityElement`](StreamingQualityElement.md)[]

array of elements that contain information about all possible streaming qualities of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[streaming_quality](../interfaces/IYoutubeVideoInfoSerpElementItem.md#streaming_quality)

#### Defined in

main.ts:58776

___

### subtitles

• `Optional` **subtitles**: `string`

subtitles in the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[subtitles](../interfaces/IYoutubeVideoInfoSerpElementItem.md#subtitles)

#### Defined in

main.ts:58774

___

### thumbnail\_url

• `Optional` **thumbnail\_url**: `string`

the URL of the page where the thumbnail is hosted

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[thumbnail_url](../interfaces/IYoutubeVideoInfoSerpElementItem.md#thumbnail_url)

#### Defined in

main.ts:58739

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

main.ts:58762

___

### title

• `Optional` **title**: `string`

title of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[title](../interfaces/IYoutubeVideoInfoSerpElementItem.md#title)

#### Defined in

main.ts:58735

___

### url

• `Optional` **url**: `string`

URL of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[url](../interfaces/IYoutubeVideoInfoSerpElementItem.md#url)

#### Defined in

main.ts:58737

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[video_id](../interfaces/IYoutubeVideoInfoSerpElementItem.md#video_id)

#### Defined in

main.ts:58733

___

### views\_count

• `Optional` **views\_count**: `number`

number of views of the video

#### Implementation of

[IYoutubeVideoInfoSerpElementItem](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[views_count](../interfaces/IYoutubeVideoInfoSerpElementItem.md#views_count)

#### Defined in

main.ts:58751

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

main.ts:58785

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

main.ts:58833

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

main.ts:58826
