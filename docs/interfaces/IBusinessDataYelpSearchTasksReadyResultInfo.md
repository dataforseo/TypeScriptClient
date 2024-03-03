[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataYelpSearchTasksReadyResultInfo

# Interface: IBusinessDataYelpSearchTasksReadyResultInfo

## Implemented by

- [`BusinessDataYelpSearchTasksReadyResultInfo`](../classes/BusinessDataYelpSearchTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataYelpSearchTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataYelpSearchTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataYelpSearchTasksReadyResultInfo.md#id)
- [se](IBusinessDataYelpSearchTasksReadyResultInfo.md#se)
- [se\_type](IBusinessDataYelpSearchTasksReadyResultInfo.md#se_type)
- [tag](IBusinessDataYelpSearchTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:203871

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:203875

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:203863

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: yelp

#### Defined in

main.ts:203866

___

### se\_type

• `Optional` **se\_type**: `string`

type of search engine
can take the following values: search

#### Defined in

main.ts:203869

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:203873
