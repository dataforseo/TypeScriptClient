[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleSearchByImageTasksReadyResultInfo

# Interface: ISerpGoogleSearchByImageTasksReadyResultInfo

## Implemented by

- [`SerpGoogleSearchByImageTasksReadyResultInfo`](../classes/SerpGoogleSearchByImageTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleSearchByImageTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleSearchByImageTasksReadyResultInfo.md#id)
- [se](ISerpGoogleSearchByImageTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleSearchByImageTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleSearchByImageTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:48427

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:48435

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:48438

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:48432

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:48420

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:48422

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: search_by_image

#### Defined in

main.ts:48425

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:48429
