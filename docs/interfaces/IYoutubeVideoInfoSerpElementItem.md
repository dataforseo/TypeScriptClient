[Documentation](../README.md) / [Exports](../modules.md) / IYoutubeVideoInfoSerpElementItem

# Interface: IYoutubeVideoInfoSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IYoutubeVideoInfoSerpElementItem`**

## Implemented by

- [`YoutubeVideoInfoSerpElementItem`](../classes/YoutubeVideoInfoSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category](IYoutubeVideoInfoSerpElementItem.md#category)
- [channel\_id](IYoutubeVideoInfoSerpElementItem.md#channel_id)
- [channel\_logo](IYoutubeVideoInfoSerpElementItem.md#channel_logo)
- [channel\_name](IYoutubeVideoInfoSerpElementItem.md#channel_name)
- [channel\_url](IYoutubeVideoInfoSerpElementItem.md#channel_url)
- [comments\_count](IYoutubeVideoInfoSerpElementItem.md#comments_count)
- [description](IYoutubeVideoInfoSerpElementItem.md#description)
- [duration\_time](IYoutubeVideoInfoSerpElementItem.md#duration_time)
- [duration\_time\_seconds](IYoutubeVideoInfoSerpElementItem.md#duration_time_seconds)
- [is\_live](IYoutubeVideoInfoSerpElementItem.md#is_live)
- [keywords](IYoutubeVideoInfoSerpElementItem.md#keywords)
- [likes\_count](IYoutubeVideoInfoSerpElementItem.md#likes_count)
- [publication\_date](IYoutubeVideoInfoSerpElementItem.md#publication_date)
- [rank\_absolute](IYoutubeVideoInfoSerpElementItem.md#rank_absolute)
- [rank\_group](IYoutubeVideoInfoSerpElementItem.md#rank_group)
- [streaming\_quality](IYoutubeVideoInfoSerpElementItem.md#streaming_quality)
- [subtitles](IYoutubeVideoInfoSerpElementItem.md#subtitles)
- [thumbnail\_url](IYoutubeVideoInfoSerpElementItem.md#thumbnail_url)
- [timestamp](IYoutubeVideoInfoSerpElementItem.md#timestamp)
- [title](IYoutubeVideoInfoSerpElementItem.md#title)
- [url](IYoutubeVideoInfoSerpElementItem.md#url)
- [video\_id](IYoutubeVideoInfoSerpElementItem.md#video_id)
- [views\_count](IYoutubeVideoInfoSerpElementItem.md#views_count)

## Properties

### category

• `Optional` **category**: `string`

the category the video belongs to

#### Defined in

main.ts:58917

___

### channel\_id

• `Optional` **channel\_id**: `string`

the ID of the channel where the video is published

#### Defined in

main.ts:58892

___

### channel\_logo

• `Optional` **channel\_logo**: `string`

the URL of the page where the logo image of the channel is hosted

#### Defined in

main.ts:58898

___

### channel\_name

• `Optional` **channel\_name**: `string`

the name of the channel where the video is published

#### Defined in

main.ts:58894

___

### channel\_url

• `Optional` **channel\_url**: `string`

the URL of the channel where the video is published

#### Defined in

main.ts:58896

___

### comments\_count

• `Optional` **comments\_count**: `number`

number of comments on the video

#### Defined in

main.ts:58906

___

### description

• `Optional` **description**: `string`

description of the video

#### Defined in

main.ts:58900

___

### duration\_time

• `Optional` **duration\_time**: `string`

duration of the video

#### Defined in

main.ts:58921

___

### duration\_time\_seconds

• `Optional` **duration\_time\_seconds**: `number`

duration of the video in seconds

#### Defined in

main.ts:58923

___

### is\_live

• `Optional` **is\_live**: `boolean`

indicates whether the video is on live

#### Defined in

main.ts:58919

___

### keywords

• `Optional` **keywords**: `string`[]

keywords relevant to the video

#### Defined in

main.ts:58915

___

### likes\_count

• `Optional` **likes\_count**: `number`

number of likes on the video

#### Defined in

main.ts:58904

___

### publication\_date

• `Optional` **publication\_date**: `string`

the date when the video is published

#### Defined in

main.ts:58908

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

main.ts:58882

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:58879

___

### streaming\_quality

• `Optional` **streaming\_quality**: [`StreamingQualityElement`](../classes/StreamingQualityElement.md)[]

array of elements that contain information about all possible streaming qualities of the video

#### Defined in

main.ts:58927

___

### subtitles

• `Optional` **subtitles**: `string`

subtitles in the video

#### Defined in

main.ts:58925

___

### thumbnail\_url

• `Optional` **thumbnail\_url**: `string`

the URL of the page where the thumbnail is hosted

#### Defined in

main.ts:58890

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Defined in

main.ts:58913

___

### title

• `Optional` **title**: `string`

title of the video

#### Defined in

main.ts:58886

___

### url

• `Optional` **url**: `string`

URL of the video

#### Defined in

main.ts:58888

___

### video\_id

• `Optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

main.ts:58884

___

### views\_count

• `Optional` **views\_count**: `number`

number of views of the video

#### Defined in

main.ts:58902
