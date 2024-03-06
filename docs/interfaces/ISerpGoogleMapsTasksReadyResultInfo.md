[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleMapsTasksReadyResultInfo

# Interface: ISerpGoogleMapsTasksReadyResultInfo

## Implemented by

- [`SerpGoogleMapsTasksReadyResultInfo`](../classes/SerpGoogleMapsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleMapsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleMapsTasksReadyResultInfo.md#id)
- [se](ISerpGoogleMapsTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleMapsTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleMapsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:37870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37870)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:37878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37878)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:37881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37881)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:37875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37875)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:37863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37863)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:37865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37865)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: maps

#### Defined in

[main.ts:37868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37868)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:37872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37872)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")