[Documentation](../README.md) / [Exports](../modules.md) / ISerpBingLocalPackTasksReadyResultInfo

# Interface: ISerpBingLocalPackTasksReadyResultInfo

## Implemented by

- [`SerpBingLocalPackTasksReadyResultInfo`](../classes/SerpBingLocalPackTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpBingLocalPackTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpBingLocalPackTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpBingLocalPackTasksReadyResultInfo.md#id)
- [se](ISerpBingLocalPackTasksReadyResultInfo.md#se)
- [se\_type](ISerpBingLocalPackTasksReadyResultInfo.md#se_type)
- [tag](ISerpBingLocalPackTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:56020

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:56028

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:56031

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:56025

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:56013

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:56015

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: local_pack

#### Defined in

main.ts:56018

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:56022
