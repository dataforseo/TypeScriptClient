[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetInfoTasksReadyResultInfo

# Interface: ISerpGoogleDatasetInfoTasksReadyResultInfo

## Implemented by

- [`SerpGoogleDatasetInfoTasksReadyResultInfo`](../classes/SerpGoogleDatasetInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleDatasetInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleDatasetInfoTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleDatasetInfoTasksReadyResultInfo.md#id)
- [se](ISerpGoogleDatasetInfoTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleDatasetInfoTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleDatasetInfoTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:52308

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52316

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52319

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52313

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:52301

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:52303

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_info

#### Defined in

main.ts:52306

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:52310
