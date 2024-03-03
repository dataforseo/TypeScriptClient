[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleAppListTasksReadyResultInfo

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

main.ts:185422

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App List task

#### Defined in

main.ts:185426

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:185429

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:185418

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:185420

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:185424
