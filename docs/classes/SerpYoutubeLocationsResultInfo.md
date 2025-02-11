[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeLocationsResultInfo

# Class: SerpYoutubeLocationsResultInfo

Defined in: main.ts:68961

## Implements

- [`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeLocationsResultInfo()

> **new SerpYoutubeLocationsResultInfo**(`data`?): [`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

Defined in: main.ts:68982

#### Parameters

##### data?

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md)

#### Returns

[`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:68976

ISO country code of the location

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpYoutubeLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:68963

location code

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:68974

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:68965

full name of the location

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_name`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:68978

location type

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_type`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:68991

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:69012

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

Defined in: main.ts:69005

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)
