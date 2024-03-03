[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsErrorsResponseInfo

# Interface: IDataforseoLabsErrorsResponseInfo

## Hierarchy

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

  ↳ **`IDataforseoLabsErrorsResponseInfo`**

## Implemented by

- [`DataforseoLabsErrorsResponseInfo`](../classes/DataforseoLabsErrorsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IDataforseoLabsErrorsResponseInfo.md#cost)
- [status\_code](IDataforseoLabsErrorsResponseInfo.md#status_code)
- [status\_message](IDataforseoLabsErrorsResponseInfo.md#status_message)
- [tasks](IDataforseoLabsErrorsResponseInfo.md#tasks)
- [tasks\_count](IDataforseoLabsErrorsResponseInfo.md#tasks_count)
- [tasks\_error](IDataforseoLabsErrorsResponseInfo.md#tasks_error)
- [time](IDataforseoLabsErrorsResponseInfo.md#time)
- [version](IDataforseoLabsErrorsResponseInfo.md#version)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[cost](IBaseResponseInfo.md#cost)

#### Defined in

main.ts:22721

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[status_code](IBaseResponseInfo.md#status_code)

#### Defined in

main.ts:22714

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[status_message](IBaseResponseInfo.md#status_message)

#### Defined in

main.ts:22717

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsErrorsTaskInfo`](../classes/DataforseoLabsErrorsTaskInfo.md)[]

array of tasks

#### Defined in

main.ts:77477

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[tasks_count](IBaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22723

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[tasks_error](IBaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22725

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[time](IBaseResponseInfo.md#time)

#### Defined in

main.ts:22719

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[version](IBaseResponseInfo.md#version)

#### Defined in

main.ts:22711
