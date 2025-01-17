[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsLocationsAndLanguagesResponseInfo

# Class: DataforseoLabsLocationsAndLanguagesResponseInfo

Defined in: main.ts:91577

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsLocationsAndLanguagesResponseInfo()

> **new DataforseoLabsLocationsAndLanguagesResponseInfo**(`data`?): [`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

Defined in: main.ts:91583

#### Parameters

##### data?

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md)

#### Returns

[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:25217

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[`cost`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:25210

general status code
you can find the full list of the response codes here

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[`status_code`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:25213

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[`status_message`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`DataforseoLabsLocationsAndLanguagesTaskInfo`](DataforseoLabsLocationsAndLanguagesTaskInfo.md)[]

Defined in: main.ts:91579

array of tasks

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[`tasks`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:25219

the number of tasks in the tasks array

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[`tasks_count`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:25221

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[`tasks_error`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:25215

total execution time, seconds

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[`time`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:25207

the current version of the API

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResponseInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md).[`version`](../interfaces/IDataforseoLabsLocationsAndLanguagesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:91587

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

Defined in: main.ts:91609

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

Defined in: main.ts:91602

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsLocationsAndLanguagesResponseInfo`](DataforseoLabsLocationsAndLanguagesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
