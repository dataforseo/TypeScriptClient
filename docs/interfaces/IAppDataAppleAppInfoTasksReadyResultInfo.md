[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleAppInfoTasksReadyResultInfo

# Interface: IAppDataAppleAppInfoTasksReadyResultInfo

## Implemented by

- [`AppDataAppleAppInfoTasksReadyResultInfo`](../classes/AppDataAppleAppInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataAppleAppInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataAppleAppInfoTasksReadyResultInfo.md#id)
- [se](IAppDataAppleAppInfoTasksReadyResultInfo.md#se)
- [tag](IAppDataAppleAppInfoTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:184366

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Info task

#### Defined in

main.ts:184370

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:184373

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:184362

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:184364

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:184368
