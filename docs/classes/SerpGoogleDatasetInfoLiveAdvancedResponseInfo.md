[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoLiveAdvancedResponseInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedResponseInfo

Defined in: main.ts:60121

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleDatasetInfoLiveAdvancedResponseInfo()

> **new SerpGoogleDatasetInfoLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

Defined in: main.ts:60127

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleDatasetInfoLiveAdvancedTaskInfo`](SerpGoogleDatasetInfoLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:60123

array of tasks

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpGoogleDatasetInfoLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:60131

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

Defined in: main.ts:60153

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

Defined in: main.ts:60146

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
