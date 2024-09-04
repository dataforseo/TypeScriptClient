[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / WorkTimeInfo

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

main.ts:22139

## Properties

### hour?

> `optional` **hour**: `number`

hours in the 24-hour format

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`hour`](../interfaces/IWorkTimeInfo.md#hour)

#### Defined in

main.ts:22133

***

### minute?

> `optional` **minute**: `number`

minutes

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`minute`](../interfaces/IWorkTimeInfo.md#minute)

#### Defined in

main.ts:22135

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:22148

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:22166

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkTimeInfo`](WorkTimeInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)

#### Defined in

main.ts:22159
