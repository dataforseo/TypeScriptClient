[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleSearchByImageTasksReadyResponseInfo

# Interface: ISerpGoogleSearchByImageTasksReadyResponseInfo

## Hierarchy

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

  ↳ **`ISerpGoogleSearchByImageTasksReadyResponseInfo`**

## Implemented by

- [`SerpGoogleSearchByImageTasksReadyResponseInfo`](../classes/SerpGoogleSearchByImageTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](ISerpGoogleSearchByImageTasksReadyResponseInfo.md#cost)
- [status\_code](ISerpGoogleSearchByImageTasksReadyResponseInfo.md#status_code)
- [status\_message](ISerpGoogleSearchByImageTasksReadyResponseInfo.md#status_message)
- [tasks](ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks)
- [tasks\_count](ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks_error)
- [time](ISerpGoogleSearchByImageTasksReadyResponseInfo.md#time)
- [version](ISerpGoogleSearchByImageTasksReadyResponseInfo.md#version)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[cost](IBaseResponseInfo.md#cost)

#### Defined in

main.ts:23098

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[status_code](IBaseResponseInfo.md#status_code)

#### Defined in

main.ts:23091

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[status_message](IBaseResponseInfo.md#status_message)

#### Defined in

main.ts:23094

___

### tasks

• `Optional` **tasks**: [`SerpGoogleSearchByImageTasksReadyTaskInfo`](../classes/SerpGoogleSearchByImageTasksReadyTaskInfo.md)[]

array of tasks

#### Defined in

main.ts:48548

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[tasks_count](IBaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23100

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[tasks_error](IBaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23102

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[time](IBaseResponseInfo.md#time)

#### Defined in

main.ts:23096

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[version](IBaseResponseInfo.md#version)

#### Defined in

main.ts:23088
