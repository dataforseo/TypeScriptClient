**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageLighthouseVersionsResponseInfo

# Class: OnPageLighthouseVersionsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseVersionsResponseInfo(data)

> **new OnPageLighthouseVersionsResponseInfo**(`data`?): [`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md)

#### Returns

[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:165919

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#cost)

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

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#status_code)

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

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`OnPageLighthouseVersionsTaskInfo`](OnPageLighthouseVersionsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks)

#### Source

main.ts:165915

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageLighthouseVersionsResponseInfo`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseVersionsResponseInfo.md#version)

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

main.ts:165923

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

main.ts:165945

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:165938
