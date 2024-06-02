**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskGetHtmlResponseInfo

# Class: SerpGoogleJobsTaskGetHtmlResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskGetHtmlResponseInfo(data)

> **new SerpGoogleJobsTaskGetHtmlResponseInfo**(`data`?): [`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:51509

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#cost)

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

[`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#status_code)

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

[`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23056

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleJobsTaskGetHtmlTaskInfo`](SerpGoogleJobsTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks)

#### Source

main.ts:51505

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23062

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23064

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23058

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleJobsTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleJobsTaskGetHtmlResponseInfo.md#version)

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

main.ts:51513

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

main.ts:51535

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:51528
