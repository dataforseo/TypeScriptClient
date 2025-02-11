[**Documentation**](../README.md)

***

[Documentation](../README.md) / DemographyItemValueInfo

# Class: DemographyItemValueInfo

Defined in: main.ts:137372

## Implements

- [`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DemographyItemValueInfo()

> **new DemographyItemValueInfo**(`data`?): [`DemographyItemValueInfo`](DemographyItemValueInfo.md)

Defined in: main.ts:137384

#### Parameters

##### data?

[`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md)

#### Returns

[`DemographyItemValueInfo`](DemographyItemValueInfo.md)

## Properties

### type?

> `optional` **type**: `string`

Defined in: main.ts:137374

type of element

#### Implementation of

[`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md).[`type`](../interfaces/IDemographyItemValueInfo.md#type)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:137380

keyword popularity rate within the specified age range
using this value you can understand how popular a keyword is within each age range;
calculation: we determine the highest popularity value for the relevant keyword across all age groups, and then express all other values as a percentage of that highest value (100);
a value of 100 is the highest popularity for the term
a value of 0 means there was not enough data for this term

#### Implementation of

[`IDemographyItemValueInfo`](../interfaces/IDemographyItemValueInfo.md).[`value`](../interfaces/IDemographyItemValueInfo.md#value)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:137393

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:137411

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DemographyItemValueInfo`](DemographyItemValueInfo.md)

Defined in: main.ts:137404

#### Parameters

##### data

`any`

#### Returns

[`DemographyItemValueInfo`](DemographyItemValueInfo.md)
