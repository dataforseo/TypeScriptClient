[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoTrendsDataInfo

# Class: DataforseoTrendsDataInfo

Defined in: main.ts:137436

## Implements

- [`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDataInfo()

> **new DataforseoTrendsDataInfo**(`data`?): [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

Defined in: main.ts:137444

#### Parameters

##### data?

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

#### Returns

[`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:137438

relevant keyword for which demographic data is provided

#### Implementation of

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md).[`keyword`](../interfaces/IDataforseoTrendsDataInfo.md#keyword)

***

### values?

> `optional` **values**: [`DemographyItemValueInfo`](DemographyItemValueInfo.md)[]

Defined in: main.ts:137440

contains age range and corresponding keyword popularity values

#### Implementation of

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md).[`values`](../interfaces/IDataforseoTrendsDataInfo.md#values)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:137453

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:137475

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

Defined in: main.ts:137468

#### Parameters

##### data

`any`

#### Returns

[`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)
