[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppReviewsTasksReadyResultInfo

# Interface: IAppDataGoogleAppReviewsTasksReadyResultInfo

## Implemented by

- [`AppDataGoogleAppReviewsTasksReadyResultInfo`](../classes/AppDataGoogleAppReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#id)
- [se](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se)
- [tag](IAppDataGoogleAppReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:186485

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Reviews task

#### Defined in

main.ts:186489

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:186492

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:186481

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:186483

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:186487
