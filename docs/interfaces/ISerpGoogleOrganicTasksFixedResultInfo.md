[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleOrganicTasksFixedResultInfo

# Interface: ISerpGoogleOrganicTasksFixedResultInfo

## Implemented by

- [`SerpGoogleOrganicTasksFixedResultInfo`](../classes/SerpGoogleOrganicTasksFixedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_fixed](ISerpGoogleOrganicTasksFixedResultInfo.md#date_fixed)
- [endpoint\_advanced](ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_advanced)
- [endpoint\_html](ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_html)
- [endpoint\_regular](ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_regular)
- [id](ISerpGoogleOrganicTasksFixedResultInfo.md#id)
- [se](ISerpGoogleOrganicTasksFixedResultInfo.md#se)
- [se\_type](ISerpGoogleOrganicTasksFixedResultInfo.md#se_type)
- [tag](ISerpGoogleOrganicTasksFixedResultInfo.md#tag)

## Properties

### date\_fixed

• `Optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Defined in

main.ts:25164

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:25172

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:25175

___

### endpoint\_regular

• `Optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Defined in

main.ts:25169

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:25157

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task

#### Defined in

main.ts:25159

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: organic

#### Defined in

main.ts:25162

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:25166
