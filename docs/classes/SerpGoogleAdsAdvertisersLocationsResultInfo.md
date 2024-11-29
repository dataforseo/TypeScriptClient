[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsAdvertisersLocationsResultInfo

# Class: SerpGoogleAdsAdvertisersLocationsResultInfo

## Implements

- [`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsAdvertisersLocationsResultInfo()

> **new SerpGoogleAdsAdvertisersLocationsResultInfo**(`data`?): [`SerpGoogleAdsAdvertisersLocationsResultInfo`](SerpGoogleAdsAdvertisersLocationsResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md)

#### Returns

[`SerpGoogleAdsAdvertisersLocationsResultInfo`](SerpGoogleAdsAdvertisersLocationsResultInfo.md)

#### Defined in

main.ts:60197

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:60191

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#location_code)

#### Defined in

main.ts:60178

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

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:60189

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`location_name`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#location_name)

#### Defined in

main.ts:60180

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpGoogleAdsAdvertisersLocationsResultInfo`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md).[`location_type`](../interfaces/ISerpGoogleAdsAdvertisersLocationsResultInfo.md#location_type)

#### Defined in

main.ts:60193

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:60206

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:60227

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsAdvertisersLocationsResultInfo`](SerpGoogleAdsAdvertisersLocationsResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsAdvertisersLocationsResultInfo`](SerpGoogleAdsAdvertisersLocationsResultInfo.md)

#### Defined in

main.ts:60220
