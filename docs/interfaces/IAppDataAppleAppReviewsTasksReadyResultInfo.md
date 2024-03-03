[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleAppReviewsTasksReadyResultInfo

# Interface: IAppDataAppleAppReviewsTasksReadyResultInfo

## Implemented by

- [`AppDataAppleAppReviewsTasksReadyResultInfo`](../classes/AppDataAppleAppReviewsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IAppDataAppleAppReviewsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_html)
- [id](IAppDataAppleAppReviewsTasksReadyResultInfo.md#id)
- [se](IAppDataAppleAppReviewsTasksReadyResultInfo.md#se)
- [tag](IAppDataAppleAppReviewsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:186198

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Reviews task

#### Defined in

main.ts:186202

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:186205

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:186194

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:186196

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:186200
