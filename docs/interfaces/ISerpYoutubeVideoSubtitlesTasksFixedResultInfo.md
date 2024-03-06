[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoSubtitlesTasksFixedResultInfo

# Interface: ISerpYoutubeVideoSubtitlesTasksFixedResultInfo

## Implemented by

- [`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../classes/SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#id)
- [se](ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se)
- [se\_type](ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se_type)
- [tag](ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:60092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60092)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:60100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60100)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:60103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60103)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:60097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60097)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:60085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60085)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:60087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60087)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_subtitles

#### Defined in

[main.ts:60090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60090)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:60094](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L60094)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")