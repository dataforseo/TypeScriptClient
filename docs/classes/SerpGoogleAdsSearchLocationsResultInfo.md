[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchLocationsResultInfo

# Class: SerpGoogleAdsSearchLocationsResultInfo

## Implements

- [`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleAdsSearchLocationsResultInfo()

> **new SerpGoogleAdsSearchLocationsResultInfo**(`data`?): [`SerpGoogleAdsSearchLocationsResultInfo`](SerpGoogleAdsSearchLocationsResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md)

#### Returns

[`SerpGoogleAdsSearchLocationsResultInfo`](SerpGoogleAdsSearchLocationsResultInfo.md)

#### Defined in

main.ts:61540

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:61534

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_code`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_code)

#### Defined in

main.ts:61521

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

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:61532

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_name`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_name)

#### Defined in

main.ts:61523

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpGoogleAdsSearchLocationsResultInfo`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md).[`location_type`](../interfaces/ISerpGoogleAdsSearchLocationsResultInfo.md#location_type)

#### Defined in

main.ts:61536

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:61549

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:61570

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleAdsSearchLocationsResultInfo`](SerpGoogleAdsSearchLocationsResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleAdsSearchLocationsResultInfo`](SerpGoogleAdsSearchLocationsResultInfo.md)

#### Defined in

main.ts:61563
