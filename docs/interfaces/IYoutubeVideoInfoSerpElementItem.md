[**Documentation**](../README.md)

***

[Documentation](../README.md) / IYoutubeVideoInfoSerpElementItem

# Interface: IYoutubeVideoInfoSerpElementItem

Defined in: main.ts:70726

## Extends

- [`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:70763

the category the video belongs to

***

### channel\_id?

> `optional` **channel\_id**: `string`

Defined in: main.ts:70736

the ID of the channel where the video is published

***

### channel\_logo?

> `optional` **channel\_logo**: `string`

Defined in: main.ts:70742

the URL of the page where the logo image of the channel is hosted

***

### channel\_name?

> `optional` **channel\_name**: `string`

Defined in: main.ts:70738

the name of the channel where the video is published

***

### channel\_subscribers\_count?

> `optional` **channel\_subscribers\_count**: [`ChannelSubscribersCount`](../classes/ChannelSubscribersCount.md)

Defined in: main.ts:70752

number of subscribers of the channel

***

### channel\_url?

> `optional` **channel\_url**: `string`

Defined in: main.ts:70740

the URL of the channel where the video is published

***

### comments\_count?

> `optional` **comments\_count**: `number`

Defined in: main.ts:70750

number of comments on the video

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:70744

description of the video

***

### duration\_time?

> `optional` **duration\_time**: `string`

Defined in: main.ts:70769

duration of the video

***

### duration\_time\_seconds?

> `optional` **duration\_time\_seconds**: `number`

Defined in: main.ts:70771

duration of the video in seconds

***

### is\_embeddable?

> `optional` **is\_embeddable**: `boolean`

Defined in: main.ts:70767

indicates whether the video is embeddable

***

### is\_live?

> `optional` **is\_live**: `boolean`

Defined in: main.ts:70765

indicates whether the video is on live

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:70761

keywords relevant to the video

***

### likes\_count?

> `optional` **likes\_count**: `number`

Defined in: main.ts:70748

number of likes on the video

***

### publication\_date?

> `optional` **publication\_date**: `string`

Defined in: main.ts:70754

the date when the video is published

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:70567

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_absolute`](IBaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:70564

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_group`](IBaseYoutubeSerpElementItem.md#rank_group)

***

### streaming\_quality?

> `optional` **streaming\_quality**: [`StreamingQualityElement`](../classes/StreamingQualityElement.md)[]

Defined in: main.ts:70775

array of elements that contain information about all possible streaming qualities of the video

***

### subtitles?

> `optional` **subtitles**: [`Subtitles`](../classes/Subtitles.md)[]

Defined in: main.ts:70773

array of elements describing properties of subtitles in the video

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

Defined in: main.ts:70734

the URL of the page where the thumbnail is hosted

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:70759

date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:70730

title of the video

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70560

type of element

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`type`](IBaseYoutubeSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:70732

URL of the video

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:70728

ID of the video received in a POST array

***

### views\_count?

> `optional` **views\_count**: `number`

Defined in: main.ts:70746

number of views of the video
