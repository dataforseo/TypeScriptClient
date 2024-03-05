[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleJobsTasksReadyResultInfo

# Interface: ISerpGoogleJobsTasksReadyResultInfo

## Implemented by

- [`SerpGoogleJobsTasksReadyResultInfo`](../classes/SerpGoogleJobsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleJobsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleJobsTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleJobsTasksReadyResultInfo.md#id)
- [se](ISerpGoogleJobsTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleJobsTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleJobsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:48768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48768)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:48776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48776)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:48779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48779)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:48773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48773)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:48761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48761)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:48763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48763)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: jobs

#### Defined in

[main.ts:48766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48766)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:48770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48770)
