[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsLocationsResultInfo

# Class: KeywordsDataGoogleAdsLocationsResultInfo

Defined in: main.ts:126270

## Implements

- [`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsLocationsResultInfo()

> **new KeywordsDataGoogleAdsLocationsResultInfo**(`data`?): [`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

Defined in: main.ts:126292

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:126285

ISO country code of the location

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:126272

location code

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:126283

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

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:126274

full name of the location

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:126288

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:126301

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:126322

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

Defined in: main.ts:126315

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)
