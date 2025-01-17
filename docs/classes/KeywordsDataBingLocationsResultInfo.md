[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingLocationsResultInfo

# Class: KeywordsDataBingLocationsResultInfo

Defined in: main.ts:138176

## Implements

- [`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingLocationsResultInfo()

> **new KeywordsDataBingLocationsResultInfo**(`data`?): [`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

Defined in: main.ts:138196

#### Parameters

##### data?

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md)

#### Returns

[`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:138190

ISO country code of the location

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:138178

location code

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`location_code`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:138188

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:138180

full name of the location

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`location_name`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:138192

location type

#### Implementation of

[`IKeywordsDataBingLocationsResultInfo`](../interfaces/IKeywordsDataBingLocationsResultInfo.md).[`location_type`](../interfaces/IKeywordsDataBingLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:138205

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:138226

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)

Defined in: main.ts:138219

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingLocationsResultInfo`](KeywordsDataBingLocationsResultInfo.md)
