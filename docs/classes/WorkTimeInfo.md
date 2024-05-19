**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / WorkTimeInfo

# Class: WorkTimeInfo

## Implements

- [`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkTimeInfo(data)

> **new WorkTimeInfo**(`data`?): [`WorkTimeInfo`](WorkTimeInfo.md)

#### Parameters

• **data?**: [`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)

#### Source

main.ts:21479

## Properties

### hour?

> **`optional`** **hour**: `number`

hours in the 24-hour format

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`hour`](../interfaces/IWorkTimeInfo.md#hour)

#### Source

main.ts:21473

***

### minute?

> **`optional`** **minute**: `number`

minutes

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`minute`](../interfaces/IWorkTimeInfo.md#minute)

#### Source

main.ts:21475

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21488

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21506

***

### fromJS()

> **`static`** **fromJS**(`data`): [`WorkTimeInfo`](WorkTimeInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)

#### Source

main.ts:21499
