**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleImagesTaskGetHtmlResponseInfo

# Class: SerpGoogleImagesTaskGetHtmlResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTaskGetHtmlResponseInfo(data)

> **new SerpGoogleImagesTaskGetHtmlResponseInfo**(`data`?): [`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Returns

[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:49302

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#cost)

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

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#status_code)

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

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleImagesTaskGetHtmlTaskInfo`](SerpGoogleImagesTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks)

#### Source

main.ts:49298

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#version)

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

main.ts:49306

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

main.ts:49328

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:49321
