**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTaskPostTaskInfo

# Class: SerpGoogleLocalFinderTaskPostTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTaskPostTaskInfo(data)

> **new SerpGoogleLocalFinderTaskPostTaskInfo**(`data`?): [`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Returns

[`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:42636

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`cost`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#cost)

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

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`data`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#data)

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

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`id`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23730

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`path`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23745

***

### result?

> **`optional`** **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`result`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#result)

#### Source

main.ts:42632

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`result_count`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#result_count)

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

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`status_code`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#status_code)

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

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`status_message`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23737

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`ISerpGoogleLocalFinderTaskPostTaskInfo`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md).[`time`](../interfaces/ISerpGoogleLocalFinderTaskPostTaskInfo.md#time)

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

main.ts:42640

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

main.ts:42658

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleLocalFinderTaskPostTaskInfo`](SerpGoogleLocalFinderTaskPostTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:42651
