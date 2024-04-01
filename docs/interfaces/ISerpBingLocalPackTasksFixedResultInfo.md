[Documentation](../README.md) / [Exports](../modules.md) / ISerpBingLocalPackTasksFixedResultInfo

# Interface: ISerpBingLocalPackTasksFixedResultInfo

## Implemented by

- [`SerpBingLocalPackTasksFixedResultInfo`](../classes/SerpBingLocalPackTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpBingLocalPackTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpBingLocalPackTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpBingLocalPackTasksFixedResultInfo.md#id)
- [se](ISerpBingLocalPackTasksFixedResultInfo.md#se)
- [se\_type](ISerpBingLocalPackTasksFixedResultInfo.md#se_type)
- [tag](ISerpBingLocalPackTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:58463

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58471

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58474

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:58468

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:58456

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:58458

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: local_pack

#### Defined in

main.ts:58461

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:58465
