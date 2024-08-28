[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IYoutubeVideoInfoSerpElementItem

# Interface: IYoutubeVideoInfoSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

the category the video belongs to

#### Defined in

main.ts:63772

***

### channel\_id?

> `optional` **channel\_id**: `string`

the ID of the channel where the video is published

#### Defined in

main.ts:63745

***

### channel\_logo?

> `optional` **channel\_logo**: `string`

the URL of the page where the logo image of the channel is hosted

#### Defined in

main.ts:63751

***

### channel\_name?

> `optional` **channel\_name**: `string`

the name of the channel where the video is published

#### Defined in

main.ts:63747

***

### channel\_subscribers\_count?

> `optional` **channel\_subscribers\_count**: [`ChannelSubscribersCount`](../classes/ChannelSubscribersCount.md)

number of subscribers of the channel

#### Defined in

main.ts:63761

***

### channel\_url?

> `optional` **channel\_url**: `string`

the URL of the channel where the video is published

#### Defined in

main.ts:63749

***

### comments\_count?

> `optional` **comments\_count**: `number`

number of comments on the video

#### Defined in

main.ts:63759

***

### description?

> `optional` **description**: `string`

description of the video

#### Defined in

main.ts:63753

***

### duration\_time?

> `optional` **duration\_time**: `string`

duration of the video

#### Defined in

main.ts:63776

***

### duration\_time\_seconds?

> `optional` **duration\_time\_seconds**: `number`

duration of the video in seconds

#### Defined in

main.ts:63778

***

### is\_live?

> `optional` **is\_live**: `boolean`

indicates whether the video is on live

#### Defined in

main.ts:63774

***

### keywords?

> `optional` **keywords**: `string`[]

keywords relevant to the video

#### Defined in

main.ts:63770

***

### likes\_count?

> `optional` **likes\_count**: `number`

number of likes on the video

#### Defined in

main.ts:63757

***

### publication\_date?

> `optional` **publication\_date**: `string`

the date when the video is published

#### Defined in

main.ts:63763

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

main.ts:63735

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:63732

***

### streaming\_quality?

> `optional` **streaming\_quality**: [`StreamingQualityElement`](../classes/StreamingQualityElement.md)[]

array of elements that contain information about all possible streaming qualities of the video

#### Defined in

main.ts:63782

***

### subtitles?

> `optional` **subtitles**: [`Subtitles`](../classes/Subtitles.md)[]

array of elements describing properties of subtitles in the video

#### Defined in

main.ts:63780

***

### thumbnail\_url?

> `optional` **thumbnail\_url**: `string`

the URL of the page where the thumbnail is hosted

#### Defined in

main.ts:63743

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Defined in

main.ts:63768

***

### title?

> `optional` **title**: `string`

title of the video

#### Defined in

main.ts:63739

***

### url?

> `optional` **url**: `string`

URL of the video

#### Defined in

main.ts:63741

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

main.ts:63737

***

### views\_count?

> `optional` **views\_count**: `number`

number of views of the video

#### Defined in

main.ts:63755
