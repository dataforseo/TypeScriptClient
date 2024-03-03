[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoSubtitlesTasksReadyResultInfo

# Interface: ISerpYoutubeVideoSubtitlesTasksReadyResultInfo

## Implemented by

- [`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../classes/SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#id)
- [se](ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se)
- [se\_type](ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se_type)
- [tag](ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:60024

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:60032

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:60035

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:60029

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:60017

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:60019

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_subtitles

#### Defined in

main.ts:60022

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:60026
