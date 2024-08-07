**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksFixedResponseInfo

# Class: SerpYahooOrganicTasksFixedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTasksFixedResponseInfo(data)

> **new SerpYahooOrganicTasksFixedResponseInfo**(`data`?): [`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md)

#### Returns

[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:68076

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`cost`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23649

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`status_code`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23642

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`status_message`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`SerpYahooOrganicTasksFixedTaskInfo`](SerpYahooOrganicTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`tasks`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks)

#### Source

main.ts:68072

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`time`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[`version`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23639

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

main.ts:68080

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

main.ts:68102

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:68095
