[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeLocationsCountryResultInfo

# Class: SerpYoutubeLocationsCountryResultInfo

## Implements

- [`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeLocationsCountryResultInfo()

> **new SerpYoutubeLocationsCountryResultInfo**(`data`?): [`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

#### Parameters

##### data?

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md)

#### Returns

[`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

#### Defined in

main.ts:69144

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:69138

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:69125

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

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

#### Defined in

main.ts:69136

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:69127

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpYoutubeLocationsCountryResultInfo`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpYoutubeLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:69140

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:69153

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:69174

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeLocationsCountryResultInfo`](SerpYoutubeLocationsCountryResultInfo.md)

#### Defined in

main.ts:69167
