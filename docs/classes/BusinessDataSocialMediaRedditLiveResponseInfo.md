**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataSocialMediaRedditLiveResponseInfo

# Class: BusinessDataSocialMediaRedditLiveResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataSocialMediaRedditLiveResponseInfo(data)

> **new BusinessDataSocialMediaRedditLiveResponseInfo**(`data`?): [`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Returns

[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:212936

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[`cost`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#cost)

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

[`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[`status_code`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#status_code)

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

[`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[`status_message`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23056

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataSocialMediaRedditLiveTaskInfo`](BusinessDataSocialMediaRedditLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[`tasks`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#tasks)

#### Source

main.ts:212932

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23062

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23064

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[`time`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23058

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[`version`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#version)

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

main.ts:212940

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

main.ts:212962

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:212955
