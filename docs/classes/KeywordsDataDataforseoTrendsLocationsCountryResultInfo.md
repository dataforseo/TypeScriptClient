**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsLocationsCountryResultInfo

# Class: KeywordsDataDataforseoTrendsLocationsCountryResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsLocationsCountryResultInfo(data)

> **new KeywordsDataDataforseoTrendsLocationsCountryResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Source

main.ts:127059

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#country_iso_code)

#### Source

main.ts:127046

***

### geo\_id?

> **`optional`** **geo\_id**: `string`

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_id)

#### Source

main.ts:127055

***

### geo\_name?

> **`optional`** **geo\_name**: `string`

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_name)

#### Source

main.ts:127052

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code)

#### Source

main.ts:127033

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

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

#### Source

main.ts:127044

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_name)

#### Source

main.ts:127035

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[`location_type`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_type)

#### Source

main.ts:127049

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:127068

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:127091

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Source

main.ts:127084
