[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsLocationsCountryResultInfo

# Class: KeywordsDataGoogleAdsLocationsCountryResultInfo

## Implements

- [`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsLocationsCountryResultInfo()

> **new KeywordsDataGoogleAdsLocationsCountryResultInfo**(`data`?): [`KeywordsDataGoogleAdsLocationsCountryResultInfo`](KeywordsDataGoogleAdsLocationsCountryResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsLocationsCountryResultInfo`](KeywordsDataGoogleAdsLocationsCountryResultInfo.md)

#### Defined in

main.ts:126308

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:126301

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:126288

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

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:126299

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:126290

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md).[`location_type`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:126304

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:126317

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:126338

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsCountryResultInfo`](KeywordsDataGoogleAdsLocationsCountryResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsLocationsCountryResultInfo`](KeywordsDataGoogleAdsLocationsCountryResultInfo.md)

#### Defined in

main.ts:126331
