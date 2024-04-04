**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageLighthouseTaskPostResponseInfo

# Class: OnPageLighthouseTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseTaskPostResponseInfo(data)

> **new OnPageLighthouseTaskPostResponseInfo**(`data`?): [`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md)

#### Returns

[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:159801

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23029

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23022

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23025

***

### tasks?

> **`optional`** **tasks**: [`OnPageLighthouseTaskPostTaskInfo`](OnPageLighthouseTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#tasks)

#### Source

main.ts:159797

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23031

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23033

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23027

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageLighthouseTaskPostResponseInfo`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseTaskPostResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23019

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

main.ts:159805

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

main.ts:159827

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:159820
