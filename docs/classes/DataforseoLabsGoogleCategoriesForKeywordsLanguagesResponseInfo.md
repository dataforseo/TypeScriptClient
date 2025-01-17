[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo

# Class: DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo

Defined in: main.ts:96991

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo()

> **new DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md)

Defined in: main.ts:96997

#### Parameters

##### data?

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsGoogleCategoriesForKeywordsLanguagesTaskInfo`](DataforseoLabsGoogleCategoriesForKeywordsLanguagesTaskInfo.md)[]

Defined in: main.ts:96993

array of tasks

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md).[`version`](../interfaces/IDataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:97001

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

Defined in: main.ts:97023

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md)

Defined in: main.ts:97016

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo`](DataforseoLabsGoogleCategoriesForKeywordsLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
