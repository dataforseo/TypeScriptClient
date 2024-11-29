[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpIdListResultInfo

# Class: SerpIdListResultInfo

## Implements

- [`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpIdListResultInfo()

> **new SerpIdListResultInfo**(`data`?): [`SerpIdListResultInfo`](SerpIdListResultInfo.md)

#### Parameters

##### data?

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md)

#### Returns

[`SerpIdListResultInfo`](SerpIdListResultInfo.md)

#### Defined in

main.ts:25565

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`cost`](../interfaces/ISerpIdListResultInfo.md#cost)

#### Defined in

main.ts:25559

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`datetime_done`](../interfaces/ISerpIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:25554

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`datetime_posted`](../interfaces/ISerpIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:25549

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`id`](../interfaces/ISerpIdListResultInfo.md#id)

#### Defined in

main.ts:25541

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`metadata`](../interfaces/ISerpIdListResultInfo.md#metadata)

#### Defined in

main.ts:25561

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`status`](../interfaces/ISerpIdListResultInfo.md#status)

#### Defined in

main.ts:25557

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`url`](../interfaces/ISerpIdListResultInfo.md#url)

#### Defined in

main.ts:25544

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:25574

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:25603

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpIdListResultInfo`](SerpIdListResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpIdListResultInfo`](SerpIdListResultInfo.md)

#### Defined in

main.ts:25596
