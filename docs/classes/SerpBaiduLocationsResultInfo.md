[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduLocationsResultInfo

# Class: SerpBaiduLocationsResultInfo

## Implements

- [`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsResultInfo()

> **new SerpBaiduLocationsResultInfo**(`data`?): [`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Parameters

##### data?

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md)

#### Returns

[`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Defined in

main.ts:78367

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpBaiduLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:78360

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_code`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code)

#### Defined in

main.ts:78352

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:78358

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_name`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_name)

#### Defined in

main.ts:78354

***

### location\_type?

> `optional` **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_type`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_type)

#### Defined in

main.ts:78363

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:78376

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:78397

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

#### Defined in

main.ts:78390
