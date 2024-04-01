[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleMapsTasksReadyResultInfo

# Interface: ISerpGoogleMapsTasksReadyResultInfo

## Implemented by

- [`SerpGoogleMapsTasksReadyResultInfo`](../classes/SerpGoogleMapsTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpGoogleMapsTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpGoogleMapsTasksReadyResultInfo.md#id)
- [se](ISerpGoogleMapsTasksReadyResultInfo.md#se)
- [se\_type](ISerpGoogleMapsTasksReadyResultInfo.md#se_type)
- [tag](ISerpGoogleMapsTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:38621

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:38629

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:38632

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:38626

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:38614

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:38616

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: maps

#### Defined in

main.ts:38619

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:38623
