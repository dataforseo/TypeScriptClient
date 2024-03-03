[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleEventsTasksFixedResultInfo

# Interface: ISerpGoogleEventsTasksFixedResultInfo

## Implemented by

- [`SerpGoogleEventsTasksFixedResultInfo`](../classes/SerpGoogleEventsTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleEventsTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleEventsTasksFixedResultInfo.md#id)
- [se](ISerpGoogleEventsTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleEventsTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleEventsTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:44436

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:44444

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:44447

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:44441

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:44429

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:44431

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: events

#### Defined in

main.ts:44434

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:44438
