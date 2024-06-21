**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorLocationsResponseInfo

# Class: BusinessDataTripadvisorLocationsResponseInfo

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorLocationsResponseInfo(data)

> **new BusinessDataTripadvisorLocationsResponseInfo**(`data`?): [`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md)

#### Returns

[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

#### Source

main.ts:211650

## Properties

### cost?

> **`optional`** **cost**: `number`

total tasks cost, USD

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`cost`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

#### Source

main.ts:23252

***

### status\_code?

> **`optional`** **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`status_code`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

#### Source

main.ts:23245

***

### status\_message?

> **`optional`** **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`status_message`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

#### Source

main.ts:23248

***

### tasks?

> **`optional`** **tasks**: [`BusinessDataTripadvisorLocationsTaskInfo`](BusinessDataTripadvisorLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`tasks`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#tasks)

#### Source

main.ts:211646

***

### tasks\_count?

> **`optional`** **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

#### Source

main.ts:23254

***

### tasks\_error?

> **`optional`** **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

#### Source

main.ts:23256

***

### time?

> **`optional`** **time**: `string`

total execution time, seconds

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`time`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

#### Source

main.ts:23250

***

### version?

> **`optional`** **version**: `string`

the current version of the API

#### Implementation of

[`IBusinessDataTripadvisorLocationsResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md).[`version`](../interfaces/IBusinessDataTripadvisorLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

#### Source

main.ts:23242

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

main.ts:211654

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

main.ts:211676

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)

#### Source

main.ts:211669
