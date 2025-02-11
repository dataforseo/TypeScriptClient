[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooLocationsCountryResultInfo

# Class: SerpYahooLocationsCountryResultInfo

Defined in: main.ts:74842

## Implements

- [`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsCountryResultInfo()

> **new SerpYahooLocationsCountryResultInfo**(`data`?): [`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

Defined in: main.ts:74863

#### Parameters

##### data?

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

#### Returns

[`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:74857

ISO country code of the location

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:74844

location code

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:74855

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:74846

full name of the location

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:74859

location type

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:74872

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:74893

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

Defined in: main.ts:74886

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)
