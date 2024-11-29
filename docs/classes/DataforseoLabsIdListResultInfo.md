[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsIdListResultInfo

# Class: DataforseoLabsIdListResultInfo

## Implements

- [`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsIdListResultInfo()

> **new DataforseoLabsIdListResultInfo**(`data`?): [`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md)

#### Returns

[`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

#### Defined in

main.ts:90072

## Properties

### cost?

> `optional` **cost**: `number`

cost of the task, USD

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`cost`](../interfaces/IDataforseoLabsIdListResultInfo.md#cost)

#### Defined in

main.ts:90066

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`datetime_done`](../interfaces/IDataforseoLabsIdListResultInfo.md#datetime_done)

#### Defined in

main.ts:90061

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`datetime_posted`](../interfaces/IDataforseoLabsIdListResultInfo.md#datetime_posted)

#### Defined in

main.ts:90056

***

### id?

> `optional` **id**: `string`

id of the task

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`id`](../interfaces/IDataforseoLabsIdListResultInfo.md#id)

#### Defined in

main.ts:90048

***

### metadata?

> `optional` **metadata**: `object`

contains parameters you specified in the POST request

#### Index Signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`metadata`](../interfaces/IDataforseoLabsIdListResultInfo.md#metadata)

#### Defined in

main.ts:90068

***

### status?

> `optional` **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`status`](../interfaces/IDataforseoLabsIdListResultInfo.md#status)

#### Defined in

main.ts:90064

***

### url?

> `optional` **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`url`](../interfaces/IDataforseoLabsIdListResultInfo.md#url)

#### Defined in

main.ts:90051

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:90081

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:90110

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

#### Defined in

main.ts:90103
