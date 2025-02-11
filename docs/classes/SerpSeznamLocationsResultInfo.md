[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpSeznamLocationsResultInfo

# Class: SerpSeznamLocationsResultInfo

Defined in: main.ts:82204

## Implements

- [`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamLocationsResultInfo()

> **new SerpSeznamLocationsResultInfo**(`data`?): [`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

Defined in: main.ts:82220

#### Parameters

##### data?

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md)

#### Returns

[`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:82214

ISO country code of the location

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpSeznamLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:82206

location code

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_code`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:82212

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:82208

full name of the location

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_name`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:82216

location type

#### Implementation of

[`ISerpSeznamLocationsResultInfo`](../interfaces/ISerpSeznamLocationsResultInfo.md).[`location_type`](../interfaces/ISerpSeznamLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82229

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:82250

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)

Defined in: main.ts:82243

#### Parameters

##### data

`any`

#### Returns

[`SerpSeznamLocationsResultInfo`](SerpSeznamLocationsResultInfo.md)
