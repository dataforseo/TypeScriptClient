**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DemographyComparison

# Class: DemographyComparison

## Implements

- [`IDemographyComparison`](../interfaces/IDemographyComparison.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DemographyComparison(data)

> **new DemographyComparison**(`data`?): [`DemographyComparison`](DemographyComparison.md)

#### Parameters

• **data?**: [`IDemographyComparison`](../interfaces/IDemographyComparison.md)

#### Returns

[`DemographyComparison`](DemographyComparison.md)

#### Source

main.ts:126580

## Properties

### age?

> **`optional`** **age**: `Object`

comparison of keyword popularity data by age

#### Index signature

 \[`key`: `string`\]: (`number` \| `undefined`)[]

#### Implementation of

[`IDemographyComparison`](../interfaces/IDemographyComparison.md).[`age`](../interfaces/IDemographyComparison.md#age)

#### Source

main.ts:126574

***

### gender?

> **`optional`** **gender**: `Object`

comparison of keyword popularity data by gender

#### Index signature

 \[`key`: `string`\]: (`number` \| `undefined`)[]

#### Implementation of

[`IDemographyComparison`](../interfaces/IDemographyComparison.md).[`gender`](../interfaces/IDemographyComparison.md#gender)

#### Source

main.ts:126576

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:126589

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:126619

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DemographyComparison`](DemographyComparison.md)

#### Parameters

• **data**: `any`

#### Returns

[`DemographyComparison`](DemographyComparison.md)

#### Source

main.ts:126612
