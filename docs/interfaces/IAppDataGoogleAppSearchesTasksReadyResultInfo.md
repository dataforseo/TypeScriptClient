[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppSearchesTasksReadyResultInfo

# Interface: IAppDataGoogleAppSearchesTasksReadyResultInfo

## Implemented by

- [`AppDataGoogleAppSearchesTasksReadyResultInfo`](../classes/AppDataGoogleAppSearchesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataGoogleAppSearchesTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataGoogleAppSearchesTasksReadyResultInfo.md#id)
- [se](IAppDataGoogleAppSearchesTasksReadyResultInfo.md#se)
- [tag](IAppDataGoogleAppSearchesTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:177792

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Searches task

#### Defined in

main.ts:177796

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:177799

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:177788

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:177790

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:177794
