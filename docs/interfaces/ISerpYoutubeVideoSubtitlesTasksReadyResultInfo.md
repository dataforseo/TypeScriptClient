[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoSubtitlesTasksReadyResultInfo

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

[main.ts:59880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59880)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:59888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59888)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:59891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59891)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:59885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59885)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:59873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59873)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:59875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59875)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_subtitles

#### Defined in

[main.ts:59878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59878)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:59882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L59882)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")