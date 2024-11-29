[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsLocationsCountryResultInfo

# Class: KeywordsDataGoogleTrendsLocationsCountryResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsLocationsCountryResultInfo()

> **new KeywordsDataGoogleTrendsLocationsCountryResultInfo**(`data`?): [`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Defined in

main.ts:132718

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:132705

***

### geo\_id?

> `optional` **geo\_id**: `string`

google trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_id)

#### Defined in

main.ts:132714

***

### geo\_name?

> `optional` **geo\_name**: `string`

google trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_name)

#### Defined in

main.ts:132711

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:132692

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

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:132703

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:132694

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[`location_type`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:132708

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:132727

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:132750

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Defined in

main.ts:132743
