**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / WorkInfo

# Class: WorkInfo

## Implements

- [`IWorkInfo`](../interfaces/IWorkInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkInfo(data)

> **new WorkInfo**(`data`?): [`WorkInfo`](WorkInfo.md)

#### Parameters

• **data?**: [`IWorkInfo`](../interfaces/IWorkInfo.md)

#### Returns

[`WorkInfo`](WorkInfo.md)

#### Source

main.ts:197429

## Properties

### work\_hours?

> **`optional`** **work\_hours**: [`WorkHours`](WorkHours.md)

open hours
information about work hours of the local establishment

#### Implementation of

[`IWorkInfo`](../interfaces/IWorkInfo.md).[`work_hours`](../interfaces/IWorkInfo.md#work_hours)

#### Source

main.ts:197425

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:197438

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:197455

***

### fromJS()

> **`static`** **fromJS**(`data`): [`WorkInfo`](WorkInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkInfo`](WorkInfo.md)

#### Source

main.ts:197448
