[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleImagesTaskPostResponseInfo

# Class: SerpGoogleImagesTaskPostResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTaskPostResponseInfo()

> **new SerpGoogleImagesTaskPostResponseInfo**(`data`?): [`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md)

#### Returns

[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Defined in

main.ts:48830

## Properties

### cost?

> `optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#cost)

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

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#status_code)

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

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23827

***

### tasks?

> `optional` **tasks**: [`SerpGoogleImagesTaskPostTaskInfo`](SerpGoogleImagesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:48826

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23833

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23835

***

### time?

> `optional` **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Defined in

main.ts:23829

***

### version?

> `optional` **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleImagesTaskPostResponseInfo`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesTaskPostResponseInfo.md#version)

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

main.ts:48834

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

main.ts:48856

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:48849
