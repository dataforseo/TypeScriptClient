**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsLocationsResultInfo

# Class: KeywordsDataGoogleTrendsLocationsResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsLocationsResultInfo(data)

> **new KeywordsDataGoogleTrendsLocationsResultInfo**(`data`?): [`KeywordsDataGoogleTrendsLocationsResultInfo`](KeywordsDataGoogleTrendsLocationsResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsLocationsResultInfo`](KeywordsDataGoogleTrendsLocationsResultInfo.md)

#### Source

main.ts:121700

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:121687

***

### geo\_id?

> **`optional`** **geo\_id**: `string`

google trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#geo_id)

#### Source

main.ts:121696

***

### geo\_name?

> **`optional`** **geo\_name**: `string`

google trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#geo_name)

#### Source

main.ts:121693

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_code)

#### Source

main.ts:121674

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

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_code_parent)

#### Source

main.ts:121685

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_name)

#### Source

main.ts:121676

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataGoogleTrendsLocationsResultInfo.md#location_type)

#### Source

main.ts:121690

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:121709

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:121732

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleTrendsLocationsResultInfo`](KeywordsDataGoogleTrendsLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleTrendsLocationsResultInfo`](KeywordsDataGoogleTrendsLocationsResultInfo.md)

#### Source

main.ts:121725
