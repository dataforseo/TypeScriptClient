**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / WorkDayInfo

# Class: WorkDayInfo

## Implements

- [`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkDayInfo(data)

> **new WorkDayInfo**(`data`?): [`WorkDayInfo`](WorkDayInfo.md)

#### Parameters

• **data?**: [`IWorkDayInfo`](../interfaces/IWorkDayInfo.md)

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)

#### Source

main.ts:21179

## Properties

### close?

> **`optional`** **close**: [`WorkTimeInfo`](WorkTimeInfo.md)

closing time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`close`](../interfaces/IWorkDayInfo.md#close)

#### Source

main.ts:21175

***

### open?

> **`optional`** **open**: [`WorkTimeInfo`](WorkTimeInfo.md)

opening time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`open`](../interfaces/IWorkDayInfo.md#open)

#### Source

main.ts:21173

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21188

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21206

***

### fromJS()

> **`static`** **fromJS**(`data`): [`WorkDayInfo`](WorkDayInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)

#### Source

main.ts:21199
