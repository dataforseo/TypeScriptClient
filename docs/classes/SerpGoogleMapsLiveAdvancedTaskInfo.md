**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleMapsLiveAdvancedTaskInfo

# Class: SerpGoogleMapsLiveAdvancedTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsLiveAdvancedTaskInfo(data)

> **new SerpGoogleMapsLiveAdvancedTaskInfo**(`data`?): [`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Returns

[`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:42207

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`cost`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#cost)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`cost`](BaseResponseTaskInfo.md#cost)

#### Source

main.ts:23741

***

### data?

> **`optional`** **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`data`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#data)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`data`](BaseResponseTaskInfo.md#data)

#### Source

main.ts:23747

***

### id?

> **`optional`** **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`id`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23730

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`path`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23745

***

### result?

> **`optional`** **result**: [`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`result`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#result)

#### Source

main.ts:42203

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`result_count`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#result_count)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`result_count`](BaseResponseTaskInfo.md#result_count)

#### Source

main.ts:23743

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`status_code`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#status_code)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_code`](BaseResponseTaskInfo.md#status_code)

#### Source

main.ts:23734

***

### status\_message?

> **`optional`** **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`status_message`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23737

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[`time`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#time)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`time`](BaseResponseTaskInfo.md#time)

#### Source

main.ts:23739

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

main.ts:42211

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

main.ts:42233

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:42226
