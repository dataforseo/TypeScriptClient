**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTaskGetAdvancedResponseInfo

# Class: SerpGoogleSearchByImageTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTaskGetAdvancedResponseInfo(data)

> **new SerpGoogleSearchByImageTaskGetAdvancedResponseInfo**(`data`?): [`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:50455

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#cost)

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

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#status_code)

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

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks)

#### Source

main.ts:50451

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#version)

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

main.ts:50459

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

main.ts:50481

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:50474
