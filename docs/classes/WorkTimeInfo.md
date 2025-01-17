[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkTimeInfo

# Class: WorkTimeInfo

Defined in: main.ts:23034

## Implements

- [`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new WorkTimeInfo()

> **new WorkTimeInfo**(`data`?): [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:23042

#### Parameters

##### data?

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md)

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)

## Properties

### hour?

> `optional` **hour**: `number`

Defined in: main.ts:23036

hours in the 24-hour format

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`hour`](../interfaces/IWorkTimeInfo.md#hour)

***

### minute?

> `optional` **minute**: `number`

Defined in: main.ts:23038

minutes

#### Implementation of

[`IWorkTimeInfo`](../interfaces/IWorkTimeInfo.md).[`minute`](../interfaces/IWorkTimeInfo.md#minute)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:23051

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:23069

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkTimeInfo`](WorkTimeInfo.md)

Defined in: main.ts:23062

#### Parameters

##### data

`any`

#### Returns

[`WorkTimeInfo`](WorkTimeInfo.md)
