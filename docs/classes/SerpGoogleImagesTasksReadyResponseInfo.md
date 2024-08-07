**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleImagesTasksReadyResponseInfo

# Class: SerpGoogleImagesTasksReadyResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTasksReadyResponseInfo(data)

> **new SerpGoogleImagesTasksReadyResponseInfo**(`data`?): [`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md)

#### Returns

[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:48510

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleImagesTasksReadyTaskInfo`](SerpGoogleImagesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks)

#### Source

main.ts:48506

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleImagesTasksReadyResponseInfo`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Source

main.ts:48514

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Source

main.ts:48536

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:48529
