[**Documentation**](../README.md)

***

[Documentation](../README.md) / WorkTime

# Class: WorkTime

## Implements

- [`IWorkTime`](../interfaces/IWorkTime.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new WorkTime()

> **new WorkTime**(`data`?): [`WorkTime`](WorkTime.md)

#### Parameters

##### data?

[`IWorkTime`](../interfaces/IWorkTime.md)

#### Returns

[`WorkTime`](WorkTime.md)

#### Defined in

main.ts:210933

## Properties

### work\_hours?

> `optional` **work\_hours**: [`WorkHours`](WorkHours.md)

open hours
information about work hours of the local establishment

#### Implementation of

[`IWorkTime`](../interfaces/IWorkTime.md).[`work_hours`](../interfaces/IWorkTime.md#work_hours)

#### Defined in

main.ts:210929

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:210942

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:210959

***

### fromJS()

> `static` **fromJS**(`data`): [`WorkTime`](WorkTime.md)

#### Parameters

##### data

`any`

#### Returns

[`WorkTime`](WorkTime.md)

#### Defined in

main.ts:210952
