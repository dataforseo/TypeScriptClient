**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleMapsTasksReadyTaskInfo

# Class: SerpGoogleMapsTasksReadyTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTasksReadyTaskInfo(data)

> **new SerpGoogleMapsTasksReadyTaskInfo**(`data`?): [`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md)

#### Returns

[`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:40114

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`cost`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#cost)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`cost`](BaseResponseTaskInfo.md#cost)

#### Source

main.ts:23344

***

### data?

> **`optional`** **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`data`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#data)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`data`](BaseResponseTaskInfo.md#data)

#### Source

main.ts:23350

***

### id?

> **`optional`** **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`id`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23333

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`path`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23348

***

### result?

> **`optional`** **result**: [`SerpGoogleMapsTasksReadyResultInfo`](SerpGoogleMapsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`result`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#result)

#### Source

main.ts:40110

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`result_count`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#result_count)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`result_count`](BaseResponseTaskInfo.md#result_count)

#### Source

main.ts:23346

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`status_code`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#status_code)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_code`](BaseResponseTaskInfo.md#status_code)

#### Source

main.ts:23337

***

### status\_message?

> **`optional`** **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`status_message`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23340

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`ISerpGoogleMapsTasksReadyTaskInfo`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md).[`time`](../interfaces/ISerpGoogleMapsTasksReadyTaskInfo.md#time)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`time`](BaseResponseTaskInfo.md#time)

#### Source

main.ts:23342

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`init`](BaseResponseTaskInfo.md#init)

#### Source

main.ts:40118

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`toJSON`](BaseResponseTaskInfo.md#tojson)

#### Source

main.ts:40140

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsTasksReadyTaskInfo`](SerpGoogleMapsTasksReadyTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:40133
