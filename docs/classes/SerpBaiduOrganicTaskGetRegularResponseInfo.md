**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetRegularResponseInfo

# Class: SerpBaiduOrganicTaskGetRegularResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetRegularResponseInfo(data)

> **new SerpBaiduOrganicTaskGetRegularResponseInfo**(`data`?): [`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:70268

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`cost`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23401

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23394

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23397

***

### tasks?

> **`optional`** **tasks**: [`SerpBaiduOrganicTaskGetRegularTaskInfo`](SerpBaiduOrganicTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks)

#### Source

main.ts:70264

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23403

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23405

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`time`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23399

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`version`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23391

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

main.ts:70272

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

main.ts:70294

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:70287
