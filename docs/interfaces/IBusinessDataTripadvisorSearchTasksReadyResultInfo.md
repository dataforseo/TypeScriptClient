[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTripadvisorSearchTasksReadyResultInfo

# Interface: IBusinessDataTripadvisorSearchTasksReadyResultInfo

## Implemented by

- [`BusinessDataTripadvisorSearchTasksReadyResultInfo`](../classes/BusinessDataTripadvisorSearchTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#id)
- [se](IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#se)
- [tag](IBusinessDataTripadvisorSearchTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:206708

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:206712

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:206703

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Defined in

main.ts:206706

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:206710
