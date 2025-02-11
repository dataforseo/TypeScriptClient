[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantIdListResultInfo

# Class: MerchantIdListResultInfo

Defined in: main.ts:184494

## Implements

- [`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantIdListResultInfo()

> **new MerchantIdListResultInfo**(`data`?): [`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

Defined in: main.ts:184520

#### Parameters

##### data?

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md)

#### Returns

[`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:184514

cost of the task, USD

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`cost`](../interfaces/IMerchantIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:184509

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`datetime_done`](../interfaces/IMerchantIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:184504

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`datetime_posted`](../interfaces/IMerchantIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:184496

id of the task

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`id`](../interfaces/IMerchantIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:184516

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`metadata`](../interfaces/IMerchantIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:184512

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`status`](../interfaces/IMerchantIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:184499

URL of the task
URL you used for making an API call

#### Implementation of

[`IMerchantIdListResultInfo`](../interfaces/IMerchantIdListResultInfo.md).[`url`](../interfaces/IMerchantIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184529

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:184558

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)

Defined in: main.ts:184551

#### Parameters

##### data

`any`

#### Returns

[`MerchantIdListResultInfo`](MerchantIdListResultInfo.md)
