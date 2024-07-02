**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingLocationsResultInfo

# Class: KeywordsDataBingLocationsResultInfo

## Implements

- [`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingLocationsResultInfo(data)

> **new KeywordsDataBingLocationsResultInfo**(`data`?): [`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md)

#### Returns

[`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

#### Source

main.ts:129971

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:129965

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_code)

#### Source

main.ts:129953

***

### location\_code\_parent?

> **`optional`** **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_code_parent)

#### Source

main.ts:129963

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_name)

#### Source

main.ts:129955

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_type)

#### Source

main.ts:129967

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:129980

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:130001

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

#### Source

main.ts:129994
