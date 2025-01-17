[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskGetRegularResponseInfo

# Class: SerpNaverOrganicTaskGetRegularResponseInfo

Defined in: main.ts:81625

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetRegularResponseInfo()

> **new SerpNaverOrganicTaskGetRegularResponseInfo**(`data`?): [`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)

Defined in: main.ts:81631

#### Parameters

##### data?

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[`cost`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[`status_code`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[`status_message`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpNaverOrganicTaskGetRegularTaskInfo`](SerpNaverOrganicTaskGetRegularTaskInfo.md)[]

Defined in: main.ts:81627

array of tasks

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[`tasks`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[`time`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[`version`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:81635

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

Defined in: main.ts:81657

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)

Defined in: main.ts:81650

#### Parameters

##### data

`any`

#### Returns

[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
