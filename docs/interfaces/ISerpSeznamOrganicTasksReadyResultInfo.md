[Documentation](../README.md) / [Exports](../modules.md) / ISerpSeznamOrganicTasksReadyResultInfo

# Interface: ISerpSeznamOrganicTasksReadyResultInfo

## Implemented by

- [`SerpSeznamOrganicTasksReadyResultInfo`](../classes/SerpSeznamOrganicTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](ISerpSeznamOrganicTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpSeznamOrganicTasksReadyResultInfo.md#endpoint_regular)
- [id](ISerpSeznamOrganicTasksReadyResultInfo.md#id)
- [se](ISerpSeznamOrganicTasksReadyResultInfo.md#se)
- [se\_type](ISerpSeznamOrganicTasksReadyResultInfo.md#se_type)
- [tag](ISerpSeznamOrganicTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:69922

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:69930

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:69933

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:69927

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:69915

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:69917

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

main.ts:69920

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:69924
