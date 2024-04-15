**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBaiduLocationsResultInfo

# Class: SerpBaiduLocationsResultInfo

## Implements

- [`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsResultInfo(data)

> **new SerpBaiduLocationsResultInfo**(`data`?): [`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md)

#### Returns

[`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Source

main.ts:67614

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpBaiduLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:67607

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_code`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code)

#### Source

main.ts:67599

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code_parent)

#### Source

main.ts:67605

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_name`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_name)

#### Source

main.ts:67601

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_type`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_type)

#### Source

main.ts:67610

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:67623

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:67644

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Source

main.ts:67637
