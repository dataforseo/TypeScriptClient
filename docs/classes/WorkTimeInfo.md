[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / WorkTimeInfo

# Class: WorkTimeInfo

## Implements

- [`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkTimeInfo()

> **new WorkTimeInfo**(`data`?): [`WorkTimeInfo`](WorkTimeInfo.md)

#### Parameters

• **data?**: [`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)

#### Defined in

main.ts:21839

## Properties

### hour?

> `optional` **hour**: `number`

hours in the 24-hour format

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`hour`](../interfaces/IWorkTimeInfo.md#hour)

#### Defined in

main.ts:21833

***

### minute?

> `optional` **minute**: `number`

minutes

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`minute`](../interfaces/IWorkTimeInfo.md#minute)

#### Defined in

main.ts:21835

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21848

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21866

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkTimeInfo`](WorkTimeInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)

#### Defined in

main.ts:21859
