**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataIdListResultInfo

# Class: BusinessDataIdListResultInfo

## Implements

- [`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataIdListResultInfo(data)

> **new BusinessDataIdListResultInfo**(`data`?): [`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md)

#### Returns

[`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Source

main.ts:192895

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`cost`](../interfaces/IBusinessDataIdListResultInfo.md#cost)

#### Source

main.ts:192889

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`datetime_done`](../interfaces/IBusinessDataIdListResultInfo.md#datetime_done)

#### Source

main.ts:192884

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IBusinessDataIdListResultInfo.md#datetime_posted)

#### Source

main.ts:192879

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`id`](../interfaces/IBusinessDataIdListResultInfo.md#id)

#### Source

main.ts:192871

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`metadata`](../interfaces/IBusinessDataIdListResultInfo.md#metadata)

#### Source

main.ts:192891

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`status`](../interfaces/IBusinessDataIdListResultInfo.md#status)

#### Source

main.ts:192887

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IBusinessDataIdListResultInfo`](../interfaces/IBusinessDataIdListResultInfo.md).[`url`](../interfaces/IBusinessDataIdListResultInfo.md#url)

#### Source

main.ts:192874

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:192904

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:192933

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataIdListResultInfo`](BusinessDataIdListResultInfo.md)

#### Source

main.ts:192926
