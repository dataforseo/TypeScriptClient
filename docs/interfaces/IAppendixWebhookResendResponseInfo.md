[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAppendixWebhookResendResponseInfo

# Interface: IAppendixWebhookResendResponseInfo

## Extends

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`cost`](IBaseResponseInfo.md#cost)

#### Defined in

main.ts:23900

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_code`](IBaseResponseInfo.md#status_code)

#### Defined in

main.ts:23893

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_message`](IBaseResponseInfo.md#status_message)

#### Defined in

main.ts:23896

***

### tasks?

> `optional` **tasks**: [`AppendixWebhookResendTaskInfo`](../classes/AppendixWebhookResendTaskInfo.md)[]

array of tasks

#### Defined in

main.ts:228871

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_count`](IBaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23902

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_error`](IBaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23904

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`time`](IBaseResponseInfo.md#time)

#### Defined in

main.ts:23898

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`version`](IBaseResponseInfo.md#version)

#### Defined in

main.ts:23890
