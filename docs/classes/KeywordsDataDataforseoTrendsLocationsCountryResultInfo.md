[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsLocationsCountryResultInfo

# Class: KeywordsDataDataforseoTrendsLocationsCountryResultInfo

Defined in: main.ts:135552

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsLocationsCountryResultInfo()

> **new KeywordsDataDataforseoTrendsLocationsCountryResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

Defined in: main.ts:135580

#### Parameters

##### data?

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:135567

ISO country code of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#country_iso_code)

***

### geo\_id?

> `optional` **geo\_id**: `string`

Defined in: main.ts:135576

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_id)

***

### geo\_name?

> `optional` **geo\_name**: `string`

Defined in: main.ts:135573

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_name)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:135554

location code

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:135565

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:135556

full name of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:135570

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_type`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135589

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:135612

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

Defined in: main.ts:135605

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)
