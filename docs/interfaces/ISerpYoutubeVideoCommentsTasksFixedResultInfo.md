[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYoutubeVideoCommentsTasksFixedResultInfo

# Interface: ISerpYoutubeVideoCommentsTasksFixedResultInfo

## Implemented by

- [`SerpYoutubeVideoCommentsTasksFixedResultInfo`](../classes/SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#id)
- [se](ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se)
- [se\_type](ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se_type)
- [tag](ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

[main.ts:61698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61698)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:61706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61706)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:61709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61709)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:61703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61703)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:61691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61691)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:61693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61693)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: video_comments

#### Defined in

[main.ts:61696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61696)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:61700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61700)
