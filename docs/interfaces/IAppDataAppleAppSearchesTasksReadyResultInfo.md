[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleAppSearchesTasksReadyResultInfo

# Interface: IAppDataAppleAppSearchesTasksReadyResultInfo

## Implemented by

- [`AppDataAppleAppSearchesTasksReadyResultInfo`](../classes/AppDataAppleAppSearchesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataAppleAppSearchesTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataAppleAppSearchesTasksReadyResultInfo.md#id)
- [se](IAppDataAppleAppSearchesTasksReadyResultInfo.md#se)
- [tag](IAppDataAppleAppSearchesTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:188961

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Searches task

#### Defined in

main.ts:188965

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:188968

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:188957

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:188959

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:188963
