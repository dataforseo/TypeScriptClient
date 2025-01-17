[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleKeywordsForAppLiveResponseInfo

# Class: DataforseoLabsAppleKeywordsForAppLiveResponseInfo

Defined in: main.ts:124027

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleKeywordsForAppLiveResponseInfo()

> **new DataforseoLabsAppleKeywordsForAppLiveResponseInfo**(`data`?): [`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

Defined in: main.ts:124033

#### Parameters

##### data?

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsAppleKeywordsForAppLiveTaskInfo`](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md)[]

Defined in: main.ts:124029

array of tasks

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[`time`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[`version`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:124037

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:124059

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

Defined in: main.ts:124052

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
