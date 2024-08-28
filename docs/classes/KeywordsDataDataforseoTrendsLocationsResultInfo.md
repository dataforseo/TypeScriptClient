[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsLocationsResultInfo

# Class: KeywordsDataDataforseoTrendsLocationsResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsLocationsResultInfo()

> **new KeywordsDataDataforseoTrendsLocationsResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Defined in

main.ts:128074

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:128061

***

### geo\_id?

> `optional` **geo\_id**: `string`

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_id)

#### Defined in

main.ts:128070

***

### geo\_name?

> `optional` **geo\_name**: `string`

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_name)

#### Defined in

main.ts:128067

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code)

#### Defined in

main.ts:128048

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

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:128059

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_name)

#### Defined in

main.ts:128050

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_type)

#### Defined in

main.ts:128064

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:128083

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:128106

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Defined in

main.ts:128099
