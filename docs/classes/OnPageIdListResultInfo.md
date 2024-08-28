[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageIdListResultInfo

# Class: OnPageIdListResultInfo

## Implements

- [`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageIdListResultInfo()

> **new OnPageIdListResultInfo**(`data`?): [`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Parameters

• **data?**: [`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md)

#### Returns

[`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Defined in

main.ts:154972

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`cost`](../interfaces/IOnPageIdListResultInfo.md#cost)

#### Defined in

main.ts:154966

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`datetime_done`](../interfaces/IOnPageIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:154961

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`datetime_posted`](../interfaces/IOnPageIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:154956

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`id`](../interfaces/IOnPageIdListResultInfo.md#id)

#### Defined in

main.ts:154948

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`metadata`](../interfaces/IOnPageIdListResultInfo.md#metadata)

#### Defined in

main.ts:154968

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`status`](../interfaces/IOnPageIdListResultInfo.md#status)

#### Defined in

main.ts:154964

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`url`](../interfaces/IOnPageIdListResultInfo.md#url)

#### Defined in

main.ts:154951

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:154981

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:155010

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Defined in

main.ts:155003
