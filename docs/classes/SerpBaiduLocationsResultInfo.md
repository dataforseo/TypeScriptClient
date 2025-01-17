[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduLocationsResultInfo

# Class: SerpBaiduLocationsResultInfo

Defined in: main.ts:78350

## Implements

- [`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduLocationsResultInfo()

> **new SerpBaiduLocationsResultInfo**(`data`?): [`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

Defined in: main.ts:78367

#### Parameters

##### data?

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md)

#### Returns

[`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:78360

ISO country code of the location

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpBaiduLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:78352

location code

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_code`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:78358

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:78354

full name of the location

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_name`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:78363

location type
only City is supported for all countries except China (where Country is also supported)

#### Implementation of

[`ISerpBaiduLocationsResultInfo`](../interfaces/ISerpBaiduLocationsResultInfo.md).[`location_type`](../interfaces/ISerpBaiduLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:78376

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:78397

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)

Defined in: main.ts:78390

#### Parameters

##### data

`any`

#### Returns

[`SerpBaiduLocationsResultInfo`](SerpBaiduLocationsResultInfo.md)
