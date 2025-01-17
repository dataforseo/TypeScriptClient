[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaFacebookLiveResponseInfo

# Class: BusinessDataSocialMediaFacebookLiveResponseInfo

Defined in: main.ts:230097

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaFacebookLiveResponseInfo()

> **new BusinessDataSocialMediaFacebookLiveResponseInfo**(`data`?): [`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

Defined in: main.ts:230103

#### Parameters

##### data?

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Returns

[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`cost`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`status_code`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`status_message`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataSocialMediaFacebookLiveTaskInfo`](BusinessDataSocialMediaFacebookLiveTaskInfo.md)[]

Defined in: main.ts:230099

array of tasks

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`tasks`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`time`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`version`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:230107

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

Defined in: main.ts:230129

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

Defined in: main.ts:230122

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
