**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksDomainPagesLiveTaskInfo

# Class: BacklinksDomainPagesLiveTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesLiveTaskInfo(data)

> **new BacklinksDomainPagesLiveTaskInfo**(`data`?): [`BacklinksDomainPagesLiveTaskInfo`](BacklinksDomainPagesLiveTaskInfo.md)

#### Parameters

• **data?**: [`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md)

#### Returns

[`BacklinksDomainPagesLiveTaskInfo`](BacklinksDomainPagesLiveTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:144388

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`cost`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#cost)

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

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`data`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#data)

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

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`id`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23730

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`path`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23745

***

### result?

> **`optional`** **result**: [`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)[]

array of results

#### Implementation of

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`result`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#result)

#### Source

main.ts:144384

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`result_count`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#result_count)

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

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`status_code`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#status_code)

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

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`status_message`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23737

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`IBacklinksDomainPagesLiveTaskInfo`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md).[`time`](../interfaces/IBacklinksDomainPagesLiveTaskInfo.md#time)

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

main.ts:144392

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

main.ts:144414

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksDomainPagesLiveTaskInfo`](BacklinksDomainPagesLiveTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainPagesLiveTaskInfo`](BacklinksDomainPagesLiveTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:144407
