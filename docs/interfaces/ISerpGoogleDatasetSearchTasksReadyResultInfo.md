[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetSearchTasksReadyResultInfo

# Interface: ISerpGoogleDatasetSearchTasksReadyResultInfo

## Implemented by

- [`SerpGoogleDatasetSearchTasksReadyResultInfo`](../classes/SerpGoogleDatasetSearchTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleDatasetSearchTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleDatasetSearchTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleDatasetSearchTasksReadyResultInfo.md#id)
- [se](ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleDatasetSearchTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleDatasetSearchTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:50222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50222)

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:50230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50230)

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:50233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50233)

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:50227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50227)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:50215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50215)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:50217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50217)

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_search

#### Defined in

[main.ts:50220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50220)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:50224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50224)
