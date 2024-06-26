**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingLocalPackTaskGetRegularTaskInfo

# Class: SerpBingLocalPackTaskGetRegularTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetRegularTaskInfo(data)

> **new SerpBingLocalPackTaskGetRegularTaskInfo**(`data`?): [`SerpBingLocalPackTaskGetRegularTaskInfo`](SerpBingLocalPackTaskGetRegularTaskInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetRegularTaskInfo`](SerpBingLocalPackTaskGetRegularTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:60248

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`cost`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#cost)

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

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`data`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#data)

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

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`id`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23333

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`path`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23348

***

### result?

> **`optional`** **result**: [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)[]

array of results

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`result`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#result)

#### Source

main.ts:60244

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`result_count`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#result_count)

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

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`status_code`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#status_code)

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

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`status_message`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23340

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularTaskInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md).[`time`](../interfaces/ISerpBingLocalPackTaskGetRegularTaskInfo.md#time)

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

main.ts:60252

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

main.ts:60274

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingLocalPackTaskGetRegularTaskInfo`](SerpBingLocalPackTaskGetRegularTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackTaskGetRegularTaskInfo`](SerpBingLocalPackTaskGetRegularTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:60267
