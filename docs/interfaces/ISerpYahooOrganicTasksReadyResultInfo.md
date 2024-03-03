[Documentation](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicTasksReadyResultInfo

# Interface: ISerpYahooOrganicTasksReadyResultInfo

## Implemented by

- [`SerpYahooOrganicTasksReadyResultInfo`](../classes/SerpYahooOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpYahooOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpYahooOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpYahooOrganicTasksReadyResultInfo.md#id)
- [se](ISerpYahooOrganicTasksReadyResultInfo.md#se)
- [se\_type](ISerpYahooOrganicTasksReadyResultInfo.md#se_type)
- [tag](ISerpYahooOrganicTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:63528

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:63536

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:63539

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:63533

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:63521

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:63523

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

main.ts:63526

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:63530
