[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaPinterestLiveResponseInfo

# Class: BusinessDataSocialMediaPinterestLiveResponseInfo

Defined in: main.ts:230347

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaPinterestLiveResponseInfo()

> **new BusinessDataSocialMediaPinterestLiveResponseInfo**(`data`?): [`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

Defined in: main.ts:230353

#### Parameters

##### data?

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md)

#### Returns

[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[`cost`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[`status_code`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[`status_message`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataSocialMediaPinterestLiveTaskInfo`](BusinessDataSocialMediaPinterestLiveTaskInfo.md)[]

Defined in: main.ts:230349

array of tasks

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[`tasks`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[`time`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[`version`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230357

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

Defined in: main.ts:230379

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

Defined in: main.ts:230372

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
