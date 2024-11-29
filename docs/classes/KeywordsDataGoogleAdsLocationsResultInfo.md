[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsLocationsResultInfo

# Class: KeywordsDataGoogleAdsLocationsResultInfo

## Implements

- [`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsLocationsResultInfo()

> **new KeywordsDataGoogleAdsLocationsResultInfo**(`data`?): [`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

#### Defined in

main.ts:126108

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:126101

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_code)

#### Defined in

main.ts:126088

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

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:126099

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_name)

#### Defined in

main.ts:126090

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_type)

#### Defined in

main.ts:126104

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:126117

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:126138

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

#### Defined in

main.ts:126131
