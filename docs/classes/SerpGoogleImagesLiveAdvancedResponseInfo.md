[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesLiveAdvancedResponseInfo

# Class: SerpGoogleImagesLiveAdvancedResponseInfo

Defined in: main.ts:51995

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesLiveAdvancedResponseInfo()

> **new SerpGoogleImagesLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

Defined in: main.ts:52001

#### Parameters

##### data?

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleImagesLiveAdvancedTaskInfo`](SerpGoogleImagesLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:51997

array of tasks

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:52005

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

Defined in: main.ts:52027

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

Defined in: main.ts:52020

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
