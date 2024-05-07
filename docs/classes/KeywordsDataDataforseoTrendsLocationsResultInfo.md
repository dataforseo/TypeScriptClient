**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataDataforseoTrendsLocationsResultInfo

# Class: KeywordsDataDataforseoTrendsLocationsResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataDataforseoTrendsLocationsResultInfo(data)

> **new KeywordsDataDataforseoTrendsLocationsResultInfo**(`data`?): [`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Source

main.ts:125480

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:125467

***

### geo\_id?

> **`optional`** **geo\_id**: `string`

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`geo_id`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_id)

#### Source

main.ts:125476

***

### geo\_name?

> **`optional`** **geo\_name**: `string`

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`geo_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_name)

#### Source

main.ts:125473

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code)

#### Source

main.ts:125454

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

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code_parent)

#### Source

main.ts:125465

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_name)

#### Source

main.ts:125456

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_type)

#### Source

main.ts:125470

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:125489

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:125512

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Source

main.ts:125505
