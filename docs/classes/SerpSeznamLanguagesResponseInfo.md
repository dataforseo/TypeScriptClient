**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpSeznamLanguagesResponseInfo

# Class: SerpSeznamLanguagesResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamLanguagesResponseInfo(data)

> **new SerpSeznamLanguagesResponseInfo**(`data`?): [`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md)

#### Returns

[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:73716

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[`cost`](../interfaces/ISerpSeznamLanguagesResponseInfo.md#cost)

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

[`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[`status_code`](../interfaces/ISerpSeznamLanguagesResponseInfo.md#status_code)

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

[`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[`status_message`](../interfaces/ISerpSeznamLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`SerpSeznamLanguagesTaskInfo`](SerpSeznamLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[`tasks`](../interfaces/ISerpSeznamLanguagesResponseInfo.md#tasks)

#### Source

main.ts:73712

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[`tasks_count`](../interfaces/ISerpSeznamLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[`tasks_error`](../interfaces/ISerpSeznamLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[`time`](../interfaces/ISerpSeznamLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpSeznamLanguagesResponseInfo`](../interfaces/ISerpSeznamLanguagesResponseInfo.md).[`version`](../interfaces/ISerpSeznamLanguagesResponseInfo.md#version)

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

main.ts:73720

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

main.ts:73742

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:73735
