[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / InterestsComparison

# Class: InterestsComparison

## Implements

- [`IInterestsComparison`](../interfaces/IInterestsComparison.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new InterestsComparison()

> **new InterestsComparison**(`data`?): [`InterestsComparison`](InterestsComparison.md)

#### Parameters

• **data?**: [`IInterestsComparison`](../interfaces/IInterestsComparison.md)

#### Returns

[`InterestsComparison`](InterestsComparison.md)

#### Defined in

main.ts:126321

## Properties

### absolute\_items?

> `optional` **absolute\_items**: [`AbsoluteItems`](AbsoluteItems.md)[]

keyword popularity rates across all locations
values in this array represent percentages relative to the maximum value across all locations

#### Implementation of

[`IInterestsComparison`](../interfaces/IInterestsComparison.md).[`absolute_items`](../interfaces/IInterestsComparison.md#absolute_items)

#### Defined in

main.ts:126317

***

### items?

> `optional` **items**: [`AbsoluteItems`](AbsoluteItems.md)[]

contains keyword popularity and related data

#### Implementation of

[`IInterestsComparison`](../interfaces/IInterestsComparison.md).[`items`](../interfaces/IInterestsComparison.md#items)

#### Defined in

main.ts:126314

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:126330

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:126356

***

### fromJS()

> `static` **fromJS**(`data`): [`InterestsComparison`](InterestsComparison.md)

#### Parameters

• **data**: `any`

#### Returns

[`InterestsComparison`](InterestsComparison.md)

#### Defined in

main.ts:126349
