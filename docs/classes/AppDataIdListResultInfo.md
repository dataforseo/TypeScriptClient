**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataIdListResultInfo

# Class: AppDataIdListResultInfo

## Implements

- [`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataIdListResultInfo(data)

> **new AppDataIdListResultInfo**(`data`?): [`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Parameters

• **data?**: [`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md)

#### Returns

[`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Source

main.ts:185334

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`cost`](../interfaces/IAppDataIdListResultInfo.md#cost)

#### Source

main.ts:185328

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`datetime_done`](../interfaces/IAppDataIdListResultInfo.md#datetime_done)

#### Source

main.ts:185323

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`datetime_posted`](../interfaces/IAppDataIdListResultInfo.md#datetime_posted)

#### Source

main.ts:185318

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`id`](../interfaces/IAppDataIdListResultInfo.md#id)

#### Source

main.ts:185310

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`metadata`](../interfaces/IAppDataIdListResultInfo.md#metadata)

#### Source

main.ts:185330

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`status`](../interfaces/IAppDataIdListResultInfo.md#status)

#### Source

main.ts:185326

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IAppDataIdListResultInfo`](../interfaces/IAppDataIdListResultInfo.md).[`url`](../interfaces/IAppDataIdListResultInfo.md#url)

#### Source

main.ts:185313

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:185343

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:185372

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataIdListResultInfo`](AppDataIdListResultInfo.md)

#### Source

main.ts:185365
