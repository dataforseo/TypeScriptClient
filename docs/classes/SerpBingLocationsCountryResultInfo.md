**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingLocationsCountryResultInfo

# Class: SerpBingLocationsCountryResultInfo

## Implements

- [`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocationsCountryResultInfo(data)

> **new SerpBingLocationsCountryResultInfo**(`data`?): [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md)

#### Returns

[`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Source

main.ts:56720

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpBingLocationsCountryResultInfo.md#country_iso_code)

#### Source

main.ts:56714

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_code)

#### Source

main.ts:56701

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_code_parent)

#### Source

main.ts:56712

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_name)

#### Source

main.ts:56703

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_type)

#### Source

main.ts:56716

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:56729

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:56750

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Source

main.ts:56743
