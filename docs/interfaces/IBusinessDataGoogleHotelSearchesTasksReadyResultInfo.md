[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleHotelSearchesTasksReadyResultInfo

# Interface: IBusinessDataGoogleHotelSearchesTasksReadyResultInfo

## Implemented by

- [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](../classes/BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_posted](IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#date_posted)
- [endpoint](IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#endpoint)
- [id](IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#id)
- [se](IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#se)
- [tag](IBusinessDataGoogleHotelSearchesTasksReadyResultInfo.md#tag)

## Properties

### date\_posted

• `Optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Defined in

[main.ts:193269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193269)

___

### endpoint

• `Optional` **endpoint**: `string`

URL for collecting the results of the task

#### Defined in

[main.ts:193273](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193273)

___

### id

• `Optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Defined in

[main.ts:193264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193264)

___

### se

• `Optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Defined in

[main.ts:193267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193267)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier

#### Defined in

[main.ts:193271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193271)
