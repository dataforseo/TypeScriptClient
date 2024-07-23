**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageLighthouseAuditsResponseInfo

# Class: OnPageLighthouseAuditsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseAuditsResponseInfo(data)

> **new OnPageLighthouseAuditsResponseInfo**(`data`?): [`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md)

#### Returns

[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:165695

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#cost)

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

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#status_code)

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

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`OnPageLighthouseAuditsTaskInfo`](OnPageLighthouseAuditsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks)

#### Source

main.ts:165691

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageLighthouseAuditsResponseInfo`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseAuditsResponseInfo.md#version)

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

main.ts:165699

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

main.ts:165721

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:165714
