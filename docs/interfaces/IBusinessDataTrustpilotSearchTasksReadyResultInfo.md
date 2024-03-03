[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataTrustpilotSearchTasksReadyResultInfo

# Interface: IBusinessDataTrustpilotSearchTasksReadyResultInfo

## Implemented by

- [`BusinessDataTrustpilotSearchTasksReadyResultInfo`](../classes/BusinessDataTrustpilotSearchTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#id)
- [se](IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#se)
- [tag](IBusinessDataTrustpilotSearchTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:199111

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:199115

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:199106

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: trustpilot

#### Defined in

main.ts:199109

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:199113
