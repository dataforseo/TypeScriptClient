[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppListTasksReadyResultInfo

# Interface: IAppDataGoogleAppListTasksReadyResultInfo

## Implemented by

- [`AppDataGoogleAppListTasksReadyResultInfo`](../classes/AppDataGoogleAppListTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataGoogleAppListTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataGoogleAppListTasksReadyResultInfo.md#id)
- [se](IAppDataGoogleAppListTasksReadyResultInfo.md#se)
- [tag](IAppDataGoogleAppListTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:178680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178680)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App List task

#### Defined in

[main.ts:178684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178684)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:178687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178687)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:178676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178676)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:178678](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178678)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:178682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178682)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")