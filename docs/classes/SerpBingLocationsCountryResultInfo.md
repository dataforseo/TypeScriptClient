[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingLocationsCountryResultInfo

# Class: SerpBingLocationsCountryResultInfo

## Implements

- [`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocationsCountryResultInfo()

> **new SerpBingLocationsCountryResultInfo**(`data`?): [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md)

#### Returns

[`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Defined in

main.ts:56879

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpBingLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:56873

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:56860

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

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:56871

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:56862

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpBingLocationsCountryResultInfo`](../interfaces/ISerpBingLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpBingLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:56875

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:56888

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:56909

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)

#### Defined in

main.ts:56902
