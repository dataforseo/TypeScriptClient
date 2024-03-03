[Documentation](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelInfoTasksReadyResultInfo

# Interface: IBusinessDataGoogleHotelInfoTasksReadyResultInfo

## Implemented by

- [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](../classes/BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#date_posted)
- [endpoint\_advanced](IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_advanced)
- [endpoint\_html](IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#endpoint_html)
- [id](IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#id)
- [se](IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#se)
- [tag](IBusinessDataGoogleHotelInfoTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

main.ts:195276

___

### endpoint\_advanced

• `Optional` **endpoint\_advanced**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:195280

___

### endpoint\_html

• `Optional` **endpoint\_html**: `string`

URL for collecting the results of the task

#### Defined in

main.ts:195282

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

main.ts:195271

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Defined in

main.ts:195274

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

main.ts:195278
