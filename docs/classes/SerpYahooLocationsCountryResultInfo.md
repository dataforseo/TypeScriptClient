[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYahooLocationsCountryResultInfo

# Class: SerpYahooLocationsCountryResultInfo

## Implements

- [`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsCountryResultInfo()

> **new SerpYahooLocationsCountryResultInfo**(`data`?): [`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

#### Returns

[`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Defined in

main.ts:66556

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:66550

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:66537

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

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_code_parent`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:66548

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:66539

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:66552

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:66565

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:66586

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Defined in

main.ts:66579
