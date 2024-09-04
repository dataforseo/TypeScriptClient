[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoTrendsDataInfo

# Class: DataforseoTrendsDataInfo

## Implements

- [`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoTrendsDataInfo()

> **new DataforseoTrendsDataInfo**(`data`?): [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

#### Parameters

• **data?**: [`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md)

#### Returns

[`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

#### Defined in

main.ts:126922

## Properties

### keyword?

> `optional` **keyword**: `string`

relevant keyword for which demographic data is provided

#### Implementation of

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md).[`keyword`](../interfaces/IDataforseoTrendsDataInfo.md#keyword)

#### Defined in

main.ts:126916

***

### values?

> `optional` **values**: [`DemographyItemValueInfo`](DemographyItemValueInfo.md)[]

contains age range and corresponding keyword popularity values

#### Implementation of

[`IDataforseoTrendsDataInfo`](../interfaces/IDataforseoTrendsDataInfo.md).[`values`](../interfaces/IDataforseoTrendsDataInfo.md#values)

#### Defined in

main.ts:126918

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:126931

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:126953

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoTrendsDataInfo`](DataforseoTrendsDataInfo.md)

#### Defined in

main.ts:126946
