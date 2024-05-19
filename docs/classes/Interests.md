**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Interests

# Class: Interests

## Implements

- [`IInterests`](../interfaces/IInterests.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Interests(data)

> **new Interests**(`data`?): [`Interests`](Interests.md)

#### Parameters

• **data?**: [`IInterests`](../interfaces/IInterests.md)

#### Returns

[`Interests`](Interests.md)

#### Source

main.ts:126741

## Properties

### keyword?

> **`optional`** **keyword**: `string`

relevant keyword
the data included in the values element is based on this keyword

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`keyword`](../interfaces/IInterests.md#keyword)

#### Source

main.ts:126735

***

### values?

> **`optional`** **values**: [`Values`](Values.md)[]

contains data on relative keyword popularity by country or region

#### Implementation of

[`IInterests`](../interfaces/IInterests.md).[`values`](../interfaces/IInterests.md#values)

#### Source

main.ts:126737

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:126750

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:126772

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Interests`](Interests.md)

#### Parameters

• **data**: `any`

#### Returns

[`Interests`](Interests.md)

#### Source

main.ts:126765
