[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataDataforseoTrendsLocationsCountryResultInfo

# Class: KeywordsDataDataforseoTrendsLocationsCountryResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsLocationsCountryResultInfo()

> **new KeywordsDataDataforseoTrendsLocationsCountryResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Defined in

main.ts:125261

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:125248

***

### geo\_id?

> `optional` **geo\_id**: `string`

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_id)

#### Defined in

main.ts:125257

***

### geo\_name?

> `optional` **geo\_name**: `string`

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_name)

#### Defined in

main.ts:125254

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:125235

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

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:125246

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:125237

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_type`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:125251

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:125270

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:125293

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Defined in

main.ts:125286
