[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageIdListResultInfo

# Class: OnPageIdListResultInfo

Defined in: main.ts:163282

## Implements

- [`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageIdListResultInfo()

> **new OnPageIdListResultInfo**(`data`?): [`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

Defined in: main.ts:163308

#### Parameters

##### data?

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md)

#### Returns

[`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:163302

cost of the task, USD

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`cost`](../interfaces/IOnPageIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:163297

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`datetime_done`](../interfaces/IOnPageIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:163292

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`datetime_posted`](../interfaces/IOnPageIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:163284

id of the task

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`id`](../interfaces/IOnPageIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:163304

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`metadata`](../interfaces/IOnPageIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:163300

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`status`](../interfaces/IOnPageIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:163287

URL of the task
URL you used for making an API call

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`url`](../interfaces/IOnPageIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:163317

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:163346

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

Defined in: main.ts:163339

#### Parameters

##### data

`any`

#### Returns

[`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)
