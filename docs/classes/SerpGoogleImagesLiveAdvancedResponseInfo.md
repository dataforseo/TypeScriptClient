**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleImagesLiveAdvancedResponseInfo

# Class: SerpGoogleImagesLiveAdvancedResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesLiveAdvancedResponseInfo(data)

> **new SerpGoogleImagesLiveAdvancedResponseInfo**(`data`?): [`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Returns

[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:49562

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#cost)

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

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#status_code)

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

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23645

***

### tasks?

> **`optional`** **tasks**: [`SerpGoogleImagesLiveAdvancedTaskInfo`](SerpGoogleImagesLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks)

#### Source

main.ts:49558

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23651

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23653

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23647

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`ISerpGoogleImagesLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpGoogleImagesLiveAdvancedResponseInfo.md#version)

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

main.ts:49566

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

main.ts:49588

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:49581
