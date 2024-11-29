[**Documentation**](../README.md)

***

[Documentation](../README.md) / YoutubeVideoInfoSerpElementItem

# Class: YoutubeVideoInfoSerpElementItem

## Extends

- [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

## Implements

- [`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new YoutubeVideoInfoSerpElementItem()

> **new YoutubeVideoInfoSerpElementItem**(`data`?): [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)

#### Parameters

##### data?

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md)

#### Returns

[`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`constructor`](BaseYoutubeSerpElementItem.md#constructors)

#### Defined in

main.ts:70587

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`_discriminator`](BaseYoutubeSerpElementItem.md#_discriminator)

#### Defined in

main.ts:70470

***

### category?

> `optional` **category**: `string`

the category the video belongs to

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`category`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#category)

#### Defined in

main.ts:70571

***

### channel\_id?

> `optional` **channel\_id**: `string`

the ID of the channel where the video is published

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_id`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_id)

#### Defined in

main.ts:70544

***

### channel\_logo?

> `optional` **channel\_logo**: `string`

the URL of the page where the logo image of the channel is hosted

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_logo`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_logo)

#### Defined in

main.ts:70550

***

### channel\_name?

> `optional` **channel\_name**: `string`

the name of the channel where the video is published

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_name`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_name)

#### Defined in

main.ts:70546

***

### channel\_subscribers\_count?

> `optional` **channel\_subscribers\_count**: [`ChannelSubscribersCount`](ChannelSubscribersCount.md)

number of subscribers of the channel

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_subscribers_count`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_subscribers_count)

#### Defined in

main.ts:70560

***

### channel\_url?

> `optional` **channel\_url**: `string`

the URL of the channel where the video is published

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`channel_url`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#channel_url)

#### Defined in

main.ts:70548

***

### comments\_count?

> `optional` **comments\_count**: `number`

number of comments on the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`comments_count`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#comments_count)

#### Defined in

main.ts:70558

***

### description?

> `optional` **description**: `string`

description of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`description`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#description)

#### Defined in

main.ts:70552

***

### duration\_time?

> `optional` **duration\_time**: `string`

duration of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`duration_time`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#duration_time)

#### Defined in

main.ts:70577

***

### duration\_time\_seconds?

> `optional` **duration\_time\_seconds**: `number`

duration of the video in seconds

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`duration_time_seconds`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#duration_time_seconds)

#### Defined in

main.ts:70579

***

### is\_embeddable?

> `optional` **is\_embeddable**: `boolean`

indicates whether the video is embeddable

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`is_embeddable`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#is_embeddable)

#### Defined in

main.ts:70575

***

### is\_live?

> `optional` **is\_live**: `boolean`

indicates whether the video is on live

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`is_live`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#is_live)

#### Defined in

main.ts:70573

***

### keywords?

> `optional` **keywords**: `string`[]

keywords relevant to the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`keywords`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#keywords)

#### Defined in

main.ts:70569

***

### likes\_count?

> `optional` **likes\_count**: `number`

number of likes on the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`likes_count`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#likes_count)

#### Defined in

main.ts:70556

***

### publication\_date?

> `optional` **publication\_date**: `string`

the date when the video is published

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`publication_date`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#publication_date)

#### Defined in

main.ts:70562

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_absolute`](BaseYoutubeSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:70468

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#rank_group)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_group`](BaseYoutubeSerpElementItem.md#rank_group)

#### Defined in

main.ts:70465

***

### streaming\_quality?

> `optional` **streaming\_quality**: [`StreamingQualityElement`](StreamingQualityElement.md)[]

array of elements that contain information about all possible streaming qualities of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`streaming_quality`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#streaming_quality)

#### Defined in

main.ts:70583

***

### subtitles?

> `optional` **subtitles**: [`Subtitles`](Subtitles.md)[]

array of elements describing properties of subtitles in the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`subtitles`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#subtitles)

#### Defined in

main.ts:70581

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

the URL of the page where the thumbnail is hosted

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`thumbnail_url`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#thumbnail_url)

#### Defined in

main.ts:70542

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`timestamp`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#timestamp)

#### Defined in

main.ts:70567

***

### title?

> `optional` **title**: `string`

title of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`title`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#title)

#### Defined in

main.ts:70538

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`type`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#type)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`type`](BaseYoutubeSerpElementItem.md#type)

#### Defined in

main.ts:70461

***

### url?

> `optional` **url**: `string`

URL of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`url`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#url)

#### Defined in

main.ts:70540

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`video_id`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#video_id)

#### Defined in

main.ts:70536

***

### views\_count?

> `optional` **views\_count**: `number`

number of views of the video

#### Implementation of

[`IYoutubeVideoInfoSerpElementItem`](../interfaces/IYoutubeVideoInfoSerpElementItem.md).[`views_count`](../interfaces/IYoutubeVideoInfoSerpElementItem.md#views_count)

#### Defined in

main.ts:70554

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`init`](BaseYoutubeSerpElementItem.md#init)

#### Defined in

main.ts:70592

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`toJSON`](BaseYoutubeSerpElementItem.md#tojson)

#### Defined in

main.ts:70644

***

### fromJS()

> `static` **fromJS**(`data`): [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`fromJS`](BaseYoutubeSerpElementItem.md#fromjs)

#### Defined in

main.ts:70637
