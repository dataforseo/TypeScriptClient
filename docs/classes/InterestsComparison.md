[**Documentation**](../README.md)

***

[Documentation](../README.md) / InterestsComparison

# Class: InterestsComparison

Defined in: main.ts:136832

## Implements

- [`IInterestsComparison`](../interfaces/IInterestsComparison.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new InterestsComparison()

> **new InterestsComparison**(`data`?): [`InterestsComparison`](InterestsComparison.md)

Defined in: main.ts:136841

#### Parameters

##### data?

[`IInterestsComparison`](../interfaces/IInterestsComparison.md)

#### Returns

[`InterestsComparison`](InterestsComparison.md)

## Properties

### absolute\_items?

> `optional` **absolute\_items**: [`AbsoluteItems`](AbsoluteItems.md)[]

Defined in: main.ts:136837

keyword popularity rates across all locations
values in this array represent percentages relative to the maximum value across all locations

#### Implementation of

[`IInterestsComparison`](../interfaces/IInterestsComparison.md).[`absolute_items`](../interfaces/IInterestsComparison.md#absolute_items)

***

### items?

> `optional` **items**: [`AbsoluteItems`](AbsoluteItems.md)[]

Defined in: main.ts:136834

contains keyword popularity and related data

#### Implementation of

[`IInterestsComparison`](../interfaces/IInterestsComparison.md).[`items`](../interfaces/IInterestsComparison.md#items)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:136850

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:136876

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`InterestsComparison`](InterestsComparison.md)

Defined in: main.ts:136869

#### Parameters

##### data

`any`

#### Returns

[`InterestsComparison`](InterestsComparison.md)
