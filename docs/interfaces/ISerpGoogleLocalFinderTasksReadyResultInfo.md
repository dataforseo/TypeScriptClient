[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleLocalFinderTasksReadyResultInfo

# Interface: ISerpGoogleLocalFinderTasksReadyResultInfo

## Implemented by

- [`SerpGoogleLocalFinderTasksReadyResultInfo`](../classes/SerpGoogleLocalFinderTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleLocalFinderTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleLocalFinderTasksReadyResultInfo.md#id)
- [se](ISerpGoogleLocalFinderTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleLocalFinderTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleLocalFinderTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:40284

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:40292

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:40295

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:40289

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:40277

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:40279

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: local_finder

#### Defined in

main.ts:40282

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:40286
