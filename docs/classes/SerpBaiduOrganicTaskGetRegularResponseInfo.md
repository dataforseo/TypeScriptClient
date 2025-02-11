[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetRegularResponseInfo

# Class: SerpBaiduOrganicTaskGetRegularResponseInfo

Defined in: main.ts:79997

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetRegularResponseInfo()

> **new SerpBaiduOrganicTaskGetRegularResponseInfo**(`data`?): [`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

Defined in: main.ts:80003

#### Parameters

##### data?

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`cost`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBaiduOrganicTaskGetRegularTaskInfo`](SerpBaiduOrganicTaskGetRegularTaskInfo.md)[]

Defined in: main.ts:79999

array of tasks

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`time`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[`version`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:80007

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:80029

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

Defined in: main.ts:80022

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
