[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooLocationsCountryResultInfo

# Class: SerpYahooLocationsCountryResultInfo

## Implements

- [`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsCountryResultInfo()

> **new SerpYahooLocationsCountryResultInfo**(`data`?): [`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Parameters

##### data?

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md)

#### Returns

[`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Defined in

main.ts:74827

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:74821

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_code`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:74808

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

main.ts:74819

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_name`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:74810

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpYahooLocationsCountryResultInfo`](../interfaces/ISerpYahooLocationsCountryResultInfo.md).[`location_type`](../interfaces/ISerpYahooLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:74823

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:74836

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:74857

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooLocationsCountryResultInfo`](SerpYahooLocationsCountryResultInfo.md)

#### Defined in

main.ts:74850
