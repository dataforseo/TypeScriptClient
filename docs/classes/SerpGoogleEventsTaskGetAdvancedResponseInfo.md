**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleEventsTaskGetAdvancedResponseInfo

# Class: SerpGoogleEventsTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTaskGetAdvancedResponseInfo(data)

> **new SerpGoogleEventsTaskGetAdvancedResponseInfo**(`data`?): [`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:46819

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23060

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23053

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23056

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleEventsTaskGetAdvancedTaskInfo`](SerpGoogleEventsTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks)

#### Source

main.ts:46815

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23062

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23064

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23058

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23050

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

main.ts:46823

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

main.ts:46845

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:46838
