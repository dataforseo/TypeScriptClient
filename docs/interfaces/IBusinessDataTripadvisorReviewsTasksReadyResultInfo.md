[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTripadvisorReviewsTasksReadyResultInfo

# Interface: IBusinessDataTripadvisorReviewsTasksReadyResultInfo

## Implemented by

- [`BusinessDataTripadvisorReviewsTasksReadyResultInfo`](../classes/BusinessDataTripadvisorReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#id)
- [se](IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#se)
- [tag](IBusinessDataTripadvisorReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:207676

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:207680

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:207671

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: tripadvisor

#### Defined in

main.ts:207674

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:207678
