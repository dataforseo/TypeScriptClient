[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleDatasetInfoTasksFixedResultInfo

# Interface: ISerpGoogleDatasetInfoTasksFixedResultInfo

## Implemented by

- [`SerpGoogleDatasetInfoTasksFixedResultInfo`](../classes/SerpGoogleDatasetInfoTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#id)
- [se](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleDatasetInfoTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:52520

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52528

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52531

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:52525

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:52513

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:52515

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: dataset_info

#### Defined in

main.ts:52518

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:52522
