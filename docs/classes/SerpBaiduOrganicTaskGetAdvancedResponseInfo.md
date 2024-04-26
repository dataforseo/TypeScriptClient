**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetAdvancedResponseInfo

# Class: SerpBaiduOrganicTaskGetAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetAdvancedResponseInfo(data)

> **new SerpBaiduOrganicTaskGetAdvancedResponseInfo**(`data`?): [`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:69736

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23157

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23150

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23153

***

### tasks?

> **`optional`** **tasks**: [`SerpBaiduOrganicTaskGetAdvancedTaskInfo`](SerpBaiduOrganicTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks)

#### Source

main.ts:69732

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23159

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23161

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`time`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23155

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[`version`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23147

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

main.ts:69740

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

main.ts:69762

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:69755
