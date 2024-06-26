**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpSeznamLocationsCountryResultInfo

# Class: SerpSeznamLocationsCountryResultInfo

## Implements

- [`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamLocationsCountryResultInfo(data)

> **new SerpSeznamLocationsCountryResultInfo**(`data`?): [`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md)

#### Returns

[`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)

#### Source

main.ts:72904

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#country_iso_code)

#### Source

main.ts:72898

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_code)

#### Source

main.ts:72890

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_code_parent)

#### Source

main.ts:72896

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_name)

#### Source

main.ts:72892

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`ISerpSeznamLocationsCountryResultInfo`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpSeznamLocationsCountryResultInfo.md#location_type)

#### Source

main.ts:72900

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:72913

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:72934

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamLocationsCountryResultInfo`](SerpSeznamLocationsCountryResultInfo.md)

#### Source

main.ts:72927
