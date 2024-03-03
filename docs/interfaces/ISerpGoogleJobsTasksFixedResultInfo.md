[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleJobsTasksFixedResultInfo

# Interface: ISerpGoogleJobsTasksFixedResultInfo

## Implemented by

- [`SerpGoogleJobsTasksFixedResultInfo`](../classes/SerpGoogleJobsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleJobsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleJobsTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleJobsTasksFixedResultInfo.md#id)
- [se](ISerpGoogleJobsTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleJobsTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleJobsTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:49122

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:49130

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:49133

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:49127

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:49115

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:49117

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: jobs

#### Defined in

main.ts:49120

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:49124
