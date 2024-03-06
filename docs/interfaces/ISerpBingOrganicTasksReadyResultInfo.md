[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingOrganicTasksReadyResultInfo

# Interface: ISerpBingOrganicTasksReadyResultInfo

## Implemented by

- [`SerpBingOrganicTasksReadyResultInfo`](../classes/SerpBingOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpBingOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpBingOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpBingOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpBingOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpBingOrganicTasksReadyResultInfo.md#id)
- [se](ISerpBingOrganicTasksReadyResultInfo.md#se)
- [se\_type](ISerpBingOrganicTasksReadyResultInfo.md#se_type)
- [tag](ISerpBingOrganicTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:53870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53870)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:53878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53878)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:53881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53881)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:53875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53875)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:53863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53863)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:53865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53865)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

[main.ts:53868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53868)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:53872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53872)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")