**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IYoutubeVideoInfoSerpElementItem

# Interface: IYoutubeVideoInfoSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> **`optional`** **category**: `string`

the category the video belongs to

#### Source

main.ts:63176

***

### channel\_id?

> **`optional`** **channel\_id**: `string`

the ID of the channel where the video is published

#### Source

main.ts:63151

***

### channel\_logo?

> **`optional`** **channel\_logo**: `string`

the URL of the page where the logo image of the channel is hosted

#### Source

main.ts:63157

***

### channel\_name?

> **`optional`** **channel\_name**: `string`

the name of the channel where the video is published

#### Source

main.ts:63153

***

### channel\_url?

> **`optional`** **channel\_url**: `string`

the URL of the channel where the video is published

#### Source

main.ts:63155

***

### comments\_count?

> **`optional`** **comments\_count**: `number`

number of comments on the video

#### Source

main.ts:63165

***

### description?

> **`optional`** **description**: `string`

description of the video

#### Source

main.ts:63159

***

### duration\_time?

> **`optional`** **duration\_time**: `string`

duration of the video

#### Source

main.ts:63180

***

### duration\_time\_seconds?

> **`optional`** **duration\_time\_seconds**: `number`

duration of the video in seconds

#### Source

main.ts:63182

***

### is\_live?

> **`optional`** **is\_live**: `boolean`

indicates whether the video is on live

#### Source

main.ts:63178

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords relevant to the video

#### Source

main.ts:63174

***

### likes\_count?

> **`optional`** **likes\_count**: `number`

number of likes on the video

#### Source

main.ts:63163

***

### publication\_date?

> **`optional`** **publication\_date**: `string`

the date when the video is published

#### Source

main.ts:63167

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Source

main.ts:63141

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:63138

***

### streaming\_quality?

> **`optional`** **streaming\_quality**: [`StreamingQualityElement`](../classes/StreamingQualityElement.md)[]

array of elements that contain information about all possible streaming qualities of the video

#### Source

main.ts:63186

***

### subtitles?

> **`optional`** **subtitles**: [`Subtitles`](../classes/Subtitles.md)[]

array of elements describing properties of subtitles in the video

#### Source

main.ts:63184

***

### thumbnail\_url?

> **`optional`** **thumbnail\_url**: `string`

the URL of the page where the thumbnail is hosted

#### Source

main.ts:63149

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result is published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Source

main.ts:63172

***

### title?

> **`optional`** **title**: `string`

title of the video

#### Source

main.ts:63145

***

### url?

> **`optional`** **url**: `string`

URL of the video

#### Source

main.ts:63147

***

### video\_id?

> **`optional`** **video\_id**: `string`

ID of the video received in a POST array

#### Source

main.ts:63143

***

### views\_count?

> **`optional`** **views\_count**: `number`

number of views of the video

#### Source

main.ts:63161
