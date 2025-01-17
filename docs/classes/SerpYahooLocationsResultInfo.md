[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooLocationsResultInfo

# Class: SerpYahooLocationsResultInfo

Defined in: main.ts:74608

## Implements

- [`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsResultInfo()

> **new SerpYahooLocationsResultInfo**(`data`?): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

Defined in: main.ts:74629

#### Parameters

##### data?

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:74623

ISO country code of the location

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpYahooLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:74610

location code

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_code`](../interfaces/ISerpYahooLocationsResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:74621

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

Defined in: main.ts:74612

full name of the location

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_name`](../interfaces/ISerpYahooLocationsResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:74625

location type

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_type`](../interfaces/ISerpYahooLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:74638

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:74659

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

Defined in: main.ts:74652

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)
