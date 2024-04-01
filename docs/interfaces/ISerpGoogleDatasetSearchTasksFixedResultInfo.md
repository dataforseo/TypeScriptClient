[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetSearchTasksFixedResultInfo

# Interface: ISerpGoogleDatasetSearchTasksFixedResultInfo

## Implemented by

- [`SerpGoogleDatasetSearchTasksFixedResultInfo`](../classes/SerpGoogleDatasetSearchTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleDatasetSearchTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleDatasetSearchTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleDatasetSearchTasksFixedResultInfo.md#id)
- [se](ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleDatasetSearchTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleDatasetSearchTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:52809

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52817

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52820

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52814

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:52802

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:52804

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_search

#### Defined in

main.ts:52807

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:52811
