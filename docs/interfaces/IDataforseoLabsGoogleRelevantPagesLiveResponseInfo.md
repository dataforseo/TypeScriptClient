[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleRelevantPagesLiveResponseInfo

# Interface: IDataforseoLabsGoogleRelevantPagesLiveResponseInfo

## Hierarchy

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

  ↳ **`IDataforseoLabsGoogleRelevantPagesLiveResponseInfo`**

## Implemented by

- [`DataforseoLabsGoogleRelevantPagesLiveResponseInfo`](../classes/DataforseoLabsGoogleRelevantPagesLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#cost)
- [status\_code](IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#status_code)
- [status\_message](IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#status_message)
- [tasks](IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks)
- [tasks\_count](IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks_count)
- [tasks\_error](IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#tasks_error)
- [time](IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#time)
- [version](IDataforseoLabsGoogleRelevantPagesLiveResponseInfo.md#version)

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

• `Optional` **tasks**: [`DataforseoLabsGoogleRelevantPagesLiveTaskInfo`](../classes/DataforseoLabsGoogleRelevantPagesLiveTaskInfo.md)[]

array of tasks

#### Defined in

main.ts:92854

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
