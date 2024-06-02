**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageIdListResultInfo

# Class: OnPageIdListResultInfo

## Implements

- [`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageIdListResultInfo(data)

> **new OnPageIdListResultInfo**(`data`?): [`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Parameters

• **data?**: [`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md)

#### Returns

[`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Source

main.ts:148881

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`cost`](../interfaces/IOnPageIdListResultInfo.md#cost)

#### Source

main.ts:148875

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`datetime_done`](../interfaces/IOnPageIdListResultInfo.md#datetime_done)

#### Source

main.ts:148870

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`datetime_posted`](../interfaces/IOnPageIdListResultInfo.md#datetime_posted)

#### Source

main.ts:148865

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`id`](../interfaces/IOnPageIdListResultInfo.md#id)

#### Source

main.ts:148857

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`metadata`](../interfaces/IOnPageIdListResultInfo.md#metadata)

#### Source

main.ts:148877

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`status`](../interfaces/IOnPageIdListResultInfo.md#status)

#### Source

main.ts:148873

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IOnPageIdListResultInfo`](../interfaces/IOnPageIdListResultInfo.md).[`url`](../interfaces/IOnPageIdListResultInfo.md#url)

#### Source

main.ts:148860

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:148890

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:148919

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageIdListResultInfo`](OnPageIdListResultInfo.md)

#### Source

main.ts:148912
