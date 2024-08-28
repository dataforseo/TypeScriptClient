[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageLighthouseLanguagesResponseInfo

# Class: OnPageLighthouseLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseLanguagesResponseInfo()

> **new OnPageLighthouseLanguagesResponseInfo**(`data`?): [`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md)

#### Returns

[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:167355

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[`cost`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23831

***

### status\_code?

> `optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[`status_code`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23824

***

### status\_message?

> `optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[`status_message`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`OnPageLighthouseLanguagesTaskInfo`](OnPageLighthouseLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[`tasks`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:167351

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[`time`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`IOnPageLighthouseLanguagesResponseInfo`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md).[`version`](../interfaces/IOnPageLighthouseLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Defined in

main.ts:23821

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

#### Defined in

main.ts:167359

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:167381

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:167374
