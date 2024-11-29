[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooLocationsResultInfo

# Class: SerpYahooLocationsResultInfo

## Implements

- [`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsResultInfo()

> **new SerpYahooLocationsResultInfo**(`data`?): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Parameters

##### data?

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Defined in

main.ts:74629

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpYahooLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:74623

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_code`](../interfaces/ISerpYahooLocationsResultInfo.md#location_code)

#### Defined in

main.ts:74610

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

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpYahooLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:74621

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_name`](../interfaces/ISerpYahooLocationsResultInfo.md#location_name)

#### Defined in

main.ts:74612

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_type`](../interfaces/ISerpYahooLocationsResultInfo.md#location_type)

#### Defined in

main.ts:74625

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:74638

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:74659

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Defined in

main.ts:74652
