**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo

## Extends

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo(data)

> **new BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo**(`data`?): [`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Parameters

• **data?**: [`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`constructor`](BaseResponseTaskInfo.md#constructors)

#### Source

main.ts:199962

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`cost`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#cost)

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

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`data`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#data)

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

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`id`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#id)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`id`](BaseResponseTaskInfo.md#id)

#### Source

main.ts:23333

***

### path?

> **`optional`** **path**: `string`[]

URL path

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`path`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#path)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`path`](BaseResponseTaskInfo.md#path)

#### Source

main.ts:23348

***

### result?

> **`optional`** **result**: [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)[]

array of results

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`result`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#result)

#### Source

main.ts:199958

***

### result\_count?

> **`optional`** **result\_count**: `number`

number of elements in the result array

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`result_count`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#result_count)

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

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`status_code`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#status_code)

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

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`status_message`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#status_message)

#### Inherited from

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`status_message`](BaseResponseTaskInfo.md#status_message)

#### Source

main.ts:23340

***

### time?

> **`optional`** **time**: `string`

execution time, seconds

#### Implementation of

[`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[`time`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#time)

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

main.ts:199966

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

main.ts:199988

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Overrides

[`BaseResponseTaskInfo`](BaseResponseTaskInfo.md).[`fromJS`](BaseResponseTaskInfo.md#fromjs)

#### Source

main.ts:199981
