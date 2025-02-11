[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooLocationsResultInfo

# Class: SerpYahooLocationsResultInfo

Defined in: main.ts:74644

## Implements

- [`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsResultInfo()

> **new SerpYahooLocationsResultInfo**(`data`?): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

Defined in: main.ts:74665

#### Parameters

##### data?

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:74659

ISO country code of the location

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpYahooLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:74646

location code

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_code`](../interfaces/ISerpYahooLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:74657

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

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:74648

full name of the location

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_name`](../interfaces/ISerpYahooLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:74661

location type

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_type`](../interfaces/ISerpYahooLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:74674

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:74695

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

Defined in: main.ts:74688

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)
