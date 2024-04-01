[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppInfoTasksReadyResultInfo

# Interface: IAppDataGoogleAppInfoTasksReadyResultInfo

## Implemented by

- [`AppDataGoogleAppInfoTasksReadyResultInfo`](../classes/AppDataGoogleAppInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataGoogleAppInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataGoogleAppInfoTasksReadyResultInfo.md#id)
- [se](IAppDataGoogleAppInfoTasksReadyResultInfo.md#se)
- [tag](IAppDataGoogleAppInfoTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:185089

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Info task

#### Defined in

main.ts:185093

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:185096

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:185085

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:185087

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:185091
