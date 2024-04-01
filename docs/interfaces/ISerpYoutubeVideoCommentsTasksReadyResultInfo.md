[Documentation](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoCommentsTasksReadyResultInfo

# Interface: ISerpYoutubeVideoCommentsTasksReadyResultInfo

## Implemented by

- [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](../classes/SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#id)
- [se](ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se)
- [se\_type](ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se_type)
- [tag](ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:63861

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:63869

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:63872

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:63866

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:63854

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:63856

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_comments

#### Defined in

main.ts:63859

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:63863
