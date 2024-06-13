**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaFacebookLiveResponseInfo

# Class: BusinessDataSocialMediaFacebookLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaFacebookLiveResponseInfo(data)

> **new BusinessDataSocialMediaFacebookLiveResponseInfo**(`data`?): [`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Returns

[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:213740

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`cost`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23214

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`status_code`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23207

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`status_message`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23210

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataSocialMediaFacebookLiveTaskInfo`](BusinessDataSocialMediaFacebookLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`tasks`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks)

#### Source

main.ts:213736

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23216

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23218

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`time`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23212

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataSocialMediaFacebookLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md).[`version`](../interfaces/IBusinessDataSocialMediaFacebookLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23204

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

main.ts:213744

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

main.ts:213766

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:213759
