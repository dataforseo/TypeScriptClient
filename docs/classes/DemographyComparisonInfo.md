[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DemographyComparisonInfo

# Class: DemographyComparisonInfo

## Implements

- [`IDemographyComparisonInfo`](../interfaces/IDemographyComparisonInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DemographyComparisonInfo()

> **new DemographyComparisonInfo**(`data`?): [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Parameters

• **data?**: [`IDemographyComparisonInfo`](../interfaces/IDemographyComparisonInfo.md)

#### Returns

[`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Defined in

main.ts:21117

## Properties

### age?

> `optional` **age**: `object`

type of element

#### Index Signature

 \[`key`: `string`\]: (`number` \| `undefined`)[]

#### Implementation of

[`IDemographyComparisonInfo`](../interfaces/IDemographyComparisonInfo.md).[`age`](../interfaces/IDemographyComparisonInfo.md#age)

#### Defined in

main.ts:21111

***

### gender?

> `optional` **gender**: `object`

type of element

#### Index Signature

 \[`key`: `string`\]: (`number` \| `undefined`)[]

#### Implementation of

[`IDemographyComparisonInfo`](../interfaces/IDemographyComparisonInfo.md).[`gender`](../interfaces/IDemographyComparisonInfo.md#gender)

#### Defined in

main.ts:21113

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21126

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21156

***

### fromJS()

> `static` **fromJS**(`data`): [`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DemographyComparisonInfo`](DemographyComparisonInfo.md)

#### Defined in

main.ts:21149
