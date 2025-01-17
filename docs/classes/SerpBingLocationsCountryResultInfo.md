[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocationsCountryResultInfo

# Class: SerpBingLocationsCountryResultInfo

Defined in: main.ts:62991

## Implements

- [`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocationsCountryResultInfo()

> **new SerpBingLocationsCountryResultInfo**(`data`?): [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

Defined in: main.ts:63012

#### Parameters

##### data?

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md)

#### Returns

[`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:63006

ISO country code of the location

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpBingLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:62993

location code

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:63004

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

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:62995

full name of the location

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:63008

location type

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:63021

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:63042

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

Defined in: main.ts:63035

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)
