**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo(data)

> **new BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo**(`data`?): [`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:212759

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md#cost)

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

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md#status_code)

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

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md#tasks)

#### Source

main.ts:212755

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md#version)

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

main.ts:212763

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

main.ts:212785

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:212778
