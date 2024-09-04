[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DomainAnalyticsIdListResultInfo

# Class: DomainAnalyticsIdListResultInfo

## Implements

- [`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsIdListResultInfo()

> **new DomainAnalyticsIdListResultInfo**(`data`?): [`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Parameters

• **data?**: [`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md)

#### Returns

[`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Defined in

main.ts:74751

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`cost`](../interfaces/IDomainAnalyticsIdListResultInfo.md#cost)

#### Defined in

main.ts:74745

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`datetime_done`](../interfaces/IDomainAnalyticsIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:74740

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`datetime_posted`](../interfaces/IDomainAnalyticsIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:74735

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`id`](../interfaces/IDomainAnalyticsIdListResultInfo.md#id)

#### Defined in

main.ts:74727

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`metadata`](../interfaces/IDomainAnalyticsIdListResultInfo.md#metadata)

#### Defined in

main.ts:74747

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`status`](../interfaces/IDomainAnalyticsIdListResultInfo.md#status)

#### Defined in

main.ts:74743

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IDomainAnalyticsIdListResultInfo`](../interfaces/IDomainAnalyticsIdListResultInfo.md).[`url`](../interfaces/IDomainAnalyticsIdListResultInfo.md#url)

#### Defined in

main.ts:74730

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:74760

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:74789

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DomainAnalyticsIdListResultInfo`](DomainAnalyticsIdListResultInfo.md)

#### Defined in

main.ts:74782
