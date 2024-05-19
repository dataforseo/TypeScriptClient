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

main.ts:21423

## Properties

### close?

> **`optional`** **close**: [`WorkTimeInfo`](WorkTimeInfo.md)

closing time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`close`](../interfaces/IWorkDayInfo.md#close)

#### Source

main.ts:21419

***

### open?

> **`optional`** **open**: [`WorkTimeInfo`](WorkTimeInfo.md)

opening time

#### Implementation of

[`IWorkDayInfo`](../interfaces/IWorkDayInfo.md).[`open`](../interfaces/IWorkDayInfo.md#open)

#### Source

main.ts:21417

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21432

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21450

***

### fromJS()

> **`static`** **fromJS**(`data`): [`WorkDayInfo`](WorkDayInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkDayInfo`](WorkDayInfo.md)

#### Source

main.ts:21443
