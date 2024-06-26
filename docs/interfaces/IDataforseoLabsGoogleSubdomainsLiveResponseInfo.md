**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleSubdomainsLiveResponseInfo

# Interface: IDataforseoLabsGoogleSubdomainsLiveResponseInfo

## Extends

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`cost`](IBaseResponseInfo.md#cost)

#### Source

main.ts:23321

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_code`](IBaseResponseInfo.md#status_code)

#### Source

main.ts:23314

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_message`](IBaseResponseInfo.md#status_message)

#### Source

main.ts:23317

***

### tasks?

> **`optional`** **tasks**: [`DataforseoLabsGoogleSubdomainsLiveTaskInfo`](../classes/DataforseoLabsGoogleSubdomainsLiveTaskInfo.md)[]

array of tasks

#### Source

main.ts:94611

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_count`](IBaseResponseInfo.md#tasks_count)

#### Source

main.ts:23323

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_error`](IBaseResponseInfo.md#tasks_error)

#### Source

main.ts:23325

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`time`](IBaseResponseInfo.md#time)

#### Source

main.ts:23319

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`version`](IBaseResponseInfo.md#version)

#### Source

main.ts:23311
