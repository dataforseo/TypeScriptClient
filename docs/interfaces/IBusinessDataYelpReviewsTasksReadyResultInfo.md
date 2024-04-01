[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataYelpReviewsTasksReadyResultInfo

# Interface: IBusinessDataYelpReviewsTasksReadyResultInfo

## Implemented by

- [`BusinessDataYelpReviewsTasksReadyResultInfo`](../classes/BusinessDataYelpReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataYelpReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataYelpReviewsTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataYelpReviewsTasksReadyResultInfo.md#id)
- [se](IBusinessDataYelpReviewsTasksReadyResultInfo.md#se)
- [se\_type](IBusinessDataYelpReviewsTasksReadyResultInfo.md#se_type)
- [tag](IBusinessDataYelpReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:210574

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:210578

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:210566

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: yelp

#### Defined in

main.ts:210569

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: reviews

#### Defined in

main.ts:210572

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:210576
