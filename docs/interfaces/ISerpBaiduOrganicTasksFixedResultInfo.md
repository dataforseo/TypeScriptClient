[Documentation](../README.md) / [Exports](../modules.md) / ISerpBaiduOrganicTasksFixedResultInfo

# Interface: ISerpBaiduOrganicTasksFixedResultInfo

## Implemented by

- [`SerpBaiduOrganicTasksFixedResultInfo`](../classes/SerpBaiduOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpBaiduOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpBaiduOrganicTasksFixedResultInfo.md#id)
- [se](ISerpBaiduOrganicTasksFixedResultInfo.md#se)
- [se\_type](ISerpBaiduOrganicTasksFixedResultInfo.md#se_type)
- [tag](ISerpBaiduOrganicTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:66610

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:66618

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:66621

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:66615

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:66603

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:66605

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

main.ts:66608

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:66612
