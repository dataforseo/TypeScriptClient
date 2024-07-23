**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / InterestsComparison

# Class: InterestsComparison

## Implements

- [`IInterestsComparison`](../interfaces/IInterestsComparison.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new InterestsComparison(data)

> **new InterestsComparison**(`data`?): [`InterestsComparison`](InterestsComparison.md)

#### Parameters

• **data?**: [`IInterestsComparison`](../interfaces/IInterestsComparison.md)

#### Returns

[`InterestsComparison`](InterestsComparison.md)

#### Source

main.ts:129583

## Properties

### absolute\_items?

> **`optional`** **absolute\_items**: [`AbsoluteItems`](AbsoluteItems.md)[]

keyword popularity rates across all locations
values in this array represent percentages relative to the maximum value across all locations

#### Implementation of

[`IInterestsComparison`](../interfaces/IInterestsComparison.md).[`absolute_items`](../interfaces/IInterestsComparison.md#absolute_items)

#### Source

main.ts:129579

***

### items?

> **`optional`** **items**: [`AbsoluteItems`](AbsoluteItems.md)[]

contains keyword popularity and related data

#### Implementation of

[`IInterestsComparison`](../interfaces/IInterestsComparison.md).[`items`](../interfaces/IInterestsComparison.md#items)

#### Source

main.ts:129576

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:129592

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:129618

***

### fromJS()

> **`static`** **fromJS**(`data`): [`InterestsComparison`](InterestsComparison.md)

#### Parameters

• **data**: `any`

#### Returns

[`InterestsComparison`](InterestsComparison.md)

#### Source

main.ts:129611
