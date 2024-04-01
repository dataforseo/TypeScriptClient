[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleReviewsTasksReadyResultInfo

# Interface: IBusinessDataGoogleReviewsTasksReadyResultInfo

## Implemented by

- [`BusinessDataGoogleReviewsTasksReadyResultInfo`](../classes/BusinessDataGoogleReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataGoogleReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataGoogleReviewsTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataGoogleReviewsTasksReadyResultInfo.md#id)
- [se](IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se)
- [se\_type](IBusinessDataGoogleReviewsTasksReadyResultInfo.md#se_type)
- [tag](IBusinessDataGoogleReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:203506

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:203510

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:203498

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Defined in

main.ts:203501

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: reviews

#### Defined in

main.ts:203504

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:203508
