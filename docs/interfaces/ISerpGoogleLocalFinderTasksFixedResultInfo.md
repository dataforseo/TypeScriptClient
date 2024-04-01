[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleLocalFinderTasksFixedResultInfo

# Interface: ISerpGoogleLocalFinderTasksFixedResultInfo

## Implemented by

- [`SerpGoogleLocalFinderTasksFixedResultInfo`](../classes/SerpGoogleLocalFinderTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleLocalFinderTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleLocalFinderTasksFixedResultInfo.md#id)
- [se](ISerpGoogleLocalFinderTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleLocalFinderTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleLocalFinderTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:41105

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:41113

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:41116

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:41110

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:41098

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:41100

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: local_finder

#### Defined in

main.ts:41103

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:41107
