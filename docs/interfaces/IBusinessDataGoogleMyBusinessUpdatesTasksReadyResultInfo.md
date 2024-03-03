[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

# Interface: IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

## Implemented by

- [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../classes/BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#id)
- [se](IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se)
- [tag](IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:192348

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:192352

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:192343

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Defined in

main.ts:192346

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:192350
