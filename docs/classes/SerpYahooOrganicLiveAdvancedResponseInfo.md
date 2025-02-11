[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveAdvancedResponseInfo

# Class: SerpYahooOrganicLiveAdvancedResponseInfo

Defined in: main.ts:77861

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveAdvancedResponseInfo()

> **new SerpYahooOrganicLiveAdvancedResponseInfo**(`data`?): [`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)

Defined in: main.ts:77867

#### Parameters

##### data?

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md)

#### Returns

[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYahooOrganicLiveAdvancedTaskInfo`](SerpYahooOrganicLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:77863

array of tasks

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:77871

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

Defined in: main.ts:77893

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)

Defined in: main.ts:77886

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
