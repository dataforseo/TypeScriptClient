[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYoutubeLocationsResultInfo

# Class: SerpYoutubeLocationsResultInfo

## Implements

- [`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeLocationsResultInfo()

> **new SerpYoutubeLocationsResultInfo**(`data`?): [`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md)

#### Returns

[`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

#### Defined in

main.ts:60735

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpYoutubeLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:60729

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_code)

#### Defined in

main.ts:60716

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

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:60727

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_name`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_name)

#### Defined in

main.ts:60718

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpYoutubeLocationsResultInfo`](../interfaces/ISerpYoutubeLocationsResultInfo.md).[`location_type`](../interfaces/ISerpYoutubeLocationsResultInfo.md#location_type)

#### Defined in

main.ts:60731

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:60744

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:60765

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeLocationsResultInfo`](SerpYoutubeLocationsResultInfo.md)

#### Defined in

main.ts:60758
