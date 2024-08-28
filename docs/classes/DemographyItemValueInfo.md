[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DemographyItemValueInfo

# Class: DemographyItemValueInfo

## Implements

- [`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DemographyItemValueInfo()

> **new DemographyItemValueInfo**(`data`?): [`DemographyItemValueInfo`](DemographyItemValueInfo.md)

#### Parameters

• **data?**: [`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md)

#### Returns

[`DemographyItemValueInfo`](DemographyItemValueInfo.md)

#### Defined in

main.ts:129972

## Properties

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md).[`type`](../interfaces/IDemographyItemValueInfo.md#type)

#### Defined in

main.ts:129962

***

### value?

> `optional` **value**: `number`

keyword popularity rate within the specified age range
using this value you can understand how popular a keyword is within each age range;
calculation: we determine the highest popularity value for the relevant keyword across all age groups, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 0 means there was not enough data for this term

#### Implementation of

[`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md).[`value`](../interfaces/IDemographyItemValueInfo.md#value)

#### Defined in

main.ts:129968

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:129981

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:129999

***

### fromJS()

> `static` **fromJS**(`data`): [`DemographyItemValueInfo`](DemographyItemValueInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DemographyItemValueInfo`](DemographyItemValueInfo.md)

#### Defined in

main.ts:129992
