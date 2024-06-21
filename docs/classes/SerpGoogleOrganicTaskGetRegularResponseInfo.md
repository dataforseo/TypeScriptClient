**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTaskGetRegularResponseInfo

# Class: SerpGoogleOrganicTaskGetRegularResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleOrganicTaskGetRegularResponseInfo(data)

> **new SerpGoogleOrganicTaskGetRegularResponseInfo**(`data`?): [`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md)

#### Returns

[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:27019

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md).[`cost`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleOrganicTaskGetRegularTaskInfo`](SerpGoogleOrganicTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md#tasks)

#### Source

main.ts:27015

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md).[`time`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md).[`version`](../interfaces/ISerpGoogleOrganicTaskGetRegularResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:27023

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

main.ts:27045

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:27038
