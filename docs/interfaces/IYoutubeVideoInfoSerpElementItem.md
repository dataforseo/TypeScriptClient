[**Documentation**](../README.md)

***

[Documentation](../README.md) / IYoutubeVideoInfoSerpElementItem

# Interface: IYoutubeVideoInfoSerpElementItem

## Extends

- [`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

the category the video belongs to

#### Defined in

main.ts:70727

***

### channel\_id?

> `optional` **channel\_id**: `string`

the ID of the channel where the video is published

#### Defined in

main.ts:70700

***

### channel\_logo?

> `optional` **channel\_logo**: `string`

the URL of the page where the logo image of the channel is hosted

#### Defined in

main.ts:70706

***

### channel\_name?

> `optional` **channel\_name**: `string`

the name of the channel where the video is published

#### Defined in

main.ts:70702

***

### channel\_subscribers\_count?

> `optional` **channel\_subscribers\_count**: [`ChannelSubscribersCount`](../classes/ChannelSubscribersCount.md)

number of subscribers of the channel

#### Defined in

main.ts:70716

***

### channel\_url?

> `optional` **channel\_url**: `string`

the URL of the channel where the video is published

#### Defined in

main.ts:70704

***

### comments\_count?

> `optional` **comments\_count**: `number`

number of comments on the video

#### Defined in

main.ts:70714

***

### description?

> `optional` **description**: `string`

description of the video

#### Defined in

main.ts:70708

***

### duration\_time?

> `optional` **duration\_time**: `string`

duration of the video

#### Defined in

main.ts:70733

***

### duration\_time\_seconds?

> `optional` **duration\_time\_seconds**: `number`

duration of the video in seconds

#### Defined in

main.ts:70735

***

### is\_embeddable?

> `optional` **is\_embeddable**: `boolean`

indicates whether the video is embeddable

#### Defined in

main.ts:70731

***

### is\_live?

> `optional` **is\_live**: `boolean`

indicates whether the video is on live

#### Defined in

main.ts:70729

***

### keywords?

> `optional` **keywords**: `string`[]

keywords relevant to the video

#### Defined in

main.ts:70725

***

### likes\_count?

> `optional` **likes\_count**: `number`

number of likes on the video

#### Defined in

main.ts:70712

***

### publication\_date?

> `optional` **publication\_date**: `string`

the date when the video is published

#### Defined in

main.ts:70718

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_absolute`](IBaseYoutubeSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:70531

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_group`](IBaseYoutubeSerpElementItem.md#rank_group)

#### Defined in

main.ts:70528

***

### streaming\_quality?

> `optional` **streaming\_quality**: [`StreamingQualityElement`](../classes/StreamingQualityElement.md)[]

array of elements that contain information about all possible streaming qualities of the video

#### Defined in

main.ts:70739

***

### subtitles?

> `optional` **subtitles**: [`Subtitles`](../classes/Subtitles.md)[]

array of elements describing properties of subtitles in the video

#### Defined in

main.ts:70737

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

the URL of the page where the thumbnail is hosted

#### Defined in

main.ts:70698

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Defined in

main.ts:70723

***

### title?

> `optional` **title**: `string`

title of the video

#### Defined in

main.ts:70694

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`type`](IBaseYoutubeSerpElementItem.md#type)

#### Defined in

main.ts:70524

***

### url?

> `optional` **url**: `string`

URL of the video

#### Defined in

main.ts:70696

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

main.ts:70692

***

### views\_count?

> `optional` **views\_count**: `number`

number of views of the video

#### Defined in

main.ts:70710
