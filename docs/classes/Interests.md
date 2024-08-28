[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / Interests

# Class: Interests

## Implements

- [`IInterests`](../interfaces/IInterests.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Interests()

> **new Interests**(`data`?): [`Interests`](Interests.md)

#### Parameters

• **data?**: [`IInterests`](../interfaces/IInterests.md)

#### Returns

[`Interests`](Interests.md)

#### Defined in

main.ts:129241

## Properties

### keyword?

> `optional` **keyword**: `string`

relevant keyword
the data included in the values element is based on this keyword

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`keyword`](../interfaces/IInterests.md#keyword)

#### Defined in

main.ts:129235

***

### values?

> `optional` **values**: [`Values`](Values.md)[]

contains data on relative keyword popularity by country or region

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`values`](../interfaces/IInterests.md#values)

#### Defined in

main.ts:129237

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:129250

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:129272

***

### fromJS()

> `static` **fromJS**(`data`): [`Interests`](Interests.md)

#### Parameters

• **data**: `any`

#### Returns

[`Interests`](Interests.md)

#### Defined in

main.ts:129265
