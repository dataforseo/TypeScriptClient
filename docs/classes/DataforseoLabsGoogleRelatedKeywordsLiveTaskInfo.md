**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo

# Class: DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo(data)

> **new DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo**(`data`?): [`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:84622

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`cost`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#cost)

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

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`data`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#data)

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

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`id`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23333

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`path`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23348

***

### result?

> **`optional`** **result**: [`DataforseoLabsGoogleRelatedKeywordsLiveResultInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`result`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#result)

#### Source

main.ts:84618

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`result_count`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#result_count)

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

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`status_code`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#status_code)

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

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`status_message`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23340

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md).[`time`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md#time)

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

main.ts:84626

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

main.ts:84648

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:84641
