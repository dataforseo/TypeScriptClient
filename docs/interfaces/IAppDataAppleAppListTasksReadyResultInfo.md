[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataAppleAppListTasksReadyResultInfo

# Interface: IAppDataAppleAppListTasksReadyResultInfo

## Implemented by

- [`AppDataAppleAppListTasksReadyResultInfo`](../classes/AppDataAppleAppListTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataAppleAppListTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataAppleAppListTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataAppleAppListTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataAppleAppListTasksReadyResultInfo.md#id)
- [se](IAppDataAppleAppListTasksReadyResultInfo.md#se)
- [tag](IAppDataAppleAppListTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:185302](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185302)

___


### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App List task

#### Defined in

[main.ts:185306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185306)

___


### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

[main.ts:185309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185309)

___


### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:185298](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185298)

___


### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

[main.ts:185300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185300)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:185304](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185304)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")