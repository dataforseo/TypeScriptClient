[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeLocationsCountryResultInfo

# Class: SerpYoutubeLocationsCountryResultInfo

Defined in: main.ts:69159

## Implements

- [`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeLocationsCountryResultInfo()

> **new SerpYoutubeLocationsCountryResultInfo**(`data`?): [`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

Defined in: main.ts:69180

#### Parameters

##### data?

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md)

#### Returns

[`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:69174

ISO country code of the location

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:69161

location code

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:69172

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:69163

full name of the location

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:69176

location type

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:69189

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:69210

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

Defined in: main.ts:69203

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)
