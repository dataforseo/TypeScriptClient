**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsIdListResultInfo

# Class: DataforseoLabsIdListResultInfo

## Implements

- [`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsIdListResultInfo(data)

> **new DataforseoLabsIdListResultInfo**(`data`?): [`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md)

#### Returns

[`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

#### Source

main.ts:79097

## Properties

### cost?

> **`optional`** **cost**: `number`

cost of the task, USD

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`cost`](../interfaces/IDataforseoLabsIdListResultInfo.md#cost)

#### Source

main.ts:79091

***

### datetime\_done?

> **`optional`** **datetime\_done**: `string`

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`datetime_done`](../interfaces/IDataforseoLabsIdListResultInfo.md#datetime_done)

#### Source

main.ts:79086

***

### datetime\_posted?

> **`optional`** **datetime\_posted**: `string`

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`datetime_posted`](../interfaces/IDataforseoLabsIdListResultInfo.md#datetime_posted)

#### Source

main.ts:79081

***

### id?

> **`optional`** **id**: `string`

id of the task

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`id`](../interfaces/IDataforseoLabsIdListResultInfo.md#id)

#### Source

main.ts:79073

***

### metadata?

> **`optional`** **metadata**: `Object`

contains parameters you specified in the POST request

#### Index signature

 \[`key`: `string`\]: `any`

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`metadata`](../interfaces/IDataforseoLabsIdListResultInfo.md#metadata)

#### Source

main.ts:79093

***

### status?

> **`optional`** **status**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`status`](../interfaces/IDataforseoLabsIdListResultInfo.md#status)

#### Source

main.ts:79089

***

### url?

> **`optional`** **url**: `string`

URL of the task
URL you used for making an API call

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`url`](../interfaces/IDataforseoLabsIdListResultInfo.md#url)

#### Source

main.ts:79076

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:79106

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:79135

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

#### Source

main.ts:79128
