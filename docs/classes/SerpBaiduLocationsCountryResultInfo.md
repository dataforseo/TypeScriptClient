[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduLocationsCountryResultInfo

# Class: SerpBaiduLocationsCountryResultInfo

## Implements

- [`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsCountryResultInfo()

> **new SerpBaiduLocationsCountryResultInfo**(`data`?): [`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

#### Parameters

##### data?

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md)

#### Returns

[`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

#### Defined in

main.ts:78557

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:78550

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:78542

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:78548

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:78544

***

### location\_type?

> `optional` **location\_type**: `string`

location type
only City is supported for all countries except China (where Country is also supported)

#### Implementation of

[`ISerpBaiduLocationsCountryResultInfo`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpBaiduLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:78553

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:78566

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:78587

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)

#### Defined in

main.ts:78580
