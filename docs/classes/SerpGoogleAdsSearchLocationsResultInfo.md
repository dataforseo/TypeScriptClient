[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchLocationsResultInfo

# Class: SerpGoogleAdsSearchLocationsResultInfo

Defined in: main.ts:61519

## Implements

- [`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchLocationsResultInfo()

> **new SerpGoogleAdsSearchLocationsResultInfo**(`data`?): [`SerpGoogleAdsSearchLocationsResultInfo`](SerpGoogleAdsSearchLocationsResultInfo.md)

Defined in: main.ts:61540

#### Parameters

##### data?

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md)

#### Returns

[`SerpGoogleAdsSearchLocationsResultInfo`](SerpGoogleAdsSearchLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:61534

ISO country code of the location

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:61521

location code

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:61532

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:61523

full name of the location

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_name`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:61536

location type

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_type`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:61549

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:61570

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchLocationsResultInfo`](SerpGoogleAdsSearchLocationsResultInfo.md)

Defined in: main.ts:61563

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchLocationsResultInfo`](SerpGoogleAdsSearchLocationsResultInfo.md)
