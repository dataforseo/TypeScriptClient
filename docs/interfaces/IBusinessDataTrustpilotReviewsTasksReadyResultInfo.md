[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTrustpilotReviewsTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotReviewsTasksReadyResultInfo

## Implemented by

- [`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](../classes/BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#id)
- [se](IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#se)
- [tag](IBusinessDataTrustpilotReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:205214

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:205218

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:205209

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Defined in

main.ts:205212

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:205216
