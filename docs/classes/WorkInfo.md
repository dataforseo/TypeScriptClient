[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / WorkInfo

# Class: WorkInfo

## Implements

- [`IWorkInfo`](../interfaces/IWorkInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkInfo()

> **new WorkInfo**(`data`?): [`WorkInfo`](WorkInfo.md)

#### Parameters

• **data?**: [`IWorkInfo`](../interfaces/IWorkInfo.md)

#### Returns

[`WorkInfo`](WorkInfo.md)

#### Defined in

main.ts:198583

## Properties

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](WorkHours.md)

open hours
information about work hours of the local establishment

#### Implementation of

[`IWorkInfo`](../interfaces/IWorkInfo.md).[`work_hours`](../interfaces/IWorkInfo.md#work_hours)

#### Defined in

main.ts:198579

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:198592

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:198609

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkInfo`](WorkInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkInfo`](WorkInfo.md)

#### Defined in

main.ts:198602
