**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DemographyComparisonInfo

# Class: DemographyComparisonInfo

## Implements

- [`IDemographyComparisonInfo`](../interfaces/IDemographyComparisonInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DemographyComparisonInfo(data)

> **new DemographyComparisonInfo**(`data`?): [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Parameters

• **data?**: [`IDemographyComparisonInfo`](../interfaces/IDemographyComparisonInfo.md)

#### Returns

[`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Source

main.ts:20742

## Properties

### age?

> **`optional`** **age**: `Object`

type of element

#### Index signature

 \[`key`: `string`\]: (`number` \| `undefined`)[]

#### Implementation of

[`IDemographyComparisonInfo`](../interfaces/IDemographyComparisonInfo.md).[`age`](../interfaces/IDemographyComparisonInfo.md#age)

#### Source

main.ts:20736

***

### gender?

> **`optional`** **gender**: `Object`

type of element

#### Index signature

 \[`key`: `string`\]: (`number` \| `undefined`)[]

#### Implementation of

[`IDemographyComparisonInfo`](../interfaces/IDemographyComparisonInfo.md).[`gender`](../interfaces/IDemographyComparisonInfo.md#gender)

#### Source

main.ts:20738

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:20751

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:20781

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Source

main.ts:20774