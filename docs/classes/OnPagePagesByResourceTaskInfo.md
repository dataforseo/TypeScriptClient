**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPagePagesByResourceTaskInfo

# Class: OnPagePagesByResourceTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPagePagesByResourceTaskInfo(data)

> **new OnPagePagesByResourceTaskInfo**(`data`?): [`OnPagePagesByResourceTaskInfo`](OnPagePagesByResourceTaskInfo.md)

#### Parameters

• **data?**: [`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md)

#### Returns

[`OnPagePagesByResourceTaskInfo`](OnPagePagesByResourceTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:157166

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`cost`](../interfaces/IOnPagePagesByResourceTaskInfo.md#cost)

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

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`data`](../interfaces/IOnPagePagesByResourceTaskInfo.md#data)

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

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`id`](../interfaces/IOnPagePagesByResourceTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23730

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`path`](../interfaces/IOnPagePagesByResourceTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23745

***

### result?

> **`optional`** **result**: [`OnPagePagesByResourceResultInfo`](OnPagePagesByResourceResultInfo.md)[]

array of results

#### Implementation of

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`result`](../interfaces/IOnPagePagesByResourceTaskInfo.md#result)

#### Source

main.ts:157162

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`result_count`](../interfaces/IOnPagePagesByResourceTaskInfo.md#result_count)

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

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`status_code`](../interfaces/IOnPagePagesByResourceTaskInfo.md#status_code)

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

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`status_message`](../interfaces/IOnPagePagesByResourceTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23737

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`IOnPagePagesByResourceTaskInfo`](../interfaces/IOnPagePagesByResourceTaskInfo.md).[`time`](../interfaces/IOnPagePagesByResourceTaskInfo.md#time)

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

main.ts:157170

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

main.ts:157192

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPagePagesByResourceTaskInfo`](OnPagePagesByResourceTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPagePagesByResourceTaskInfo`](OnPagePagesByResourceTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:157185
