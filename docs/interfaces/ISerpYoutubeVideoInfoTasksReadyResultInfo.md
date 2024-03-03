[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoInfoTasksReadyResultInfo

# Interface: ISerpYoutubeVideoInfoTasksReadyResultInfo

## Implemented by

- [`SerpYoutubeVideoInfoTasksReadyResultInfo`](../classes/SerpYoutubeVideoInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpYoutubeVideoInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpYoutubeVideoInfoTasksReadyResultInfo.md#id)
- [se](ISerpYoutubeVideoInfoTasksReadyResultInfo.md#se)
- [se\_type](ISerpYoutubeVideoInfoTasksReadyResultInfo.md#se_type)
- [tag](ISerpYoutubeVideoInfoTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:58300

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58308

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58311

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58305

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:58293

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:58295

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_info

#### Defined in

main.ts:58298

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:58302
