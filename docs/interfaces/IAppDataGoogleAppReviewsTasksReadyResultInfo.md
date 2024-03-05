[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppReviewsTasksReadyResultInfo

# Interface: IAppDataGoogleAppReviewsTasksReadyResultInfo

## Implemented by

- [`AppDataGoogleAppReviewsTasksReadyResultInfo`](../classes/AppDataGoogleAppReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#id)
- [se](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se)
- [tag](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:181032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181032)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Reviews task

#### Defined in

[main.ts:181036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181036)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:181039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181039)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:181028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181028)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:181030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181030)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:181034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181034)
