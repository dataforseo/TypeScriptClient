[**Documentation**](../README.md)

***

[Documentation](../README.md) / Interests

# Class: Interests

Defined in: main.ts:136502

## Implements

- [`IInterests`](../interfaces/IInterests.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new Interests()

> **new Interests**(`data`?): [`Interests`](Interests.md)

Defined in: main.ts:136511

#### Parameters

##### data?

[`IInterests`](../interfaces/IInterests.md)

#### Returns

[`Interests`](Interests.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:136505

relevant keyword
the data included in the values element is based on this keyword

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`keyword`](../interfaces/IInterests.md#keyword)

***

### values?

> `optional` **values**: [`Values`](Values.md)[]

Defined in: main.ts:136507

contains data on relative keyword popularity by country or region

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`values`](../interfaces/IInterests.md#values)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:136520

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:136542

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`Interests`](Interests.md)

Defined in: main.ts:136535

#### Parameters

##### data

`any`

#### Returns

[`Interests`](Interests.md)
