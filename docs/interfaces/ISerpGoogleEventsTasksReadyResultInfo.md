[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleEventsTasksReadyResultInfo

# Interface: ISerpGoogleEventsTasksReadyResultInfo

## Implemented by

- [`SerpGoogleEventsTasksReadyResultInfo`](../classes/SerpGoogleEventsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleEventsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleEventsTasksReadyResultInfo.md#id)
- [se](ISerpGoogleEventsTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleEventsTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleEventsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:44082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44082)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:44090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44090)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:44093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44093)

___


### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:44087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44087)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:44075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44075)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:44077](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44077)

___


### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: events

#### Defined in

[main.ts:44080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44080)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:44084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L44084)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")