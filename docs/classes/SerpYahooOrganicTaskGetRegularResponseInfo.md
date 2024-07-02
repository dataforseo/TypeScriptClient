**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetRegularResponseInfo

# Class: SerpYahooOrganicTaskGetRegularResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetRegularResponseInfo(data)

> **new SerpYahooOrganicTaskGetRegularResponseInfo**(`data`?): [`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:67883

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`SerpYahooOrganicTaskGetRegularTaskInfo`](SerpYahooOrganicTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md#tasks)

#### Source

main.ts:67879

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicTaskGetRegularResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:67887

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

main.ts:67909

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:67902
