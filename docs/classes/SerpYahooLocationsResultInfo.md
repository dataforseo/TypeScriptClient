**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooLocationsResultInfo

# Class: SerpYahooLocationsResultInfo

## Implements

- [`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooLocationsResultInfo(data)

> **new SerpYahooLocationsResultInfo**(`data`?): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md)

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Source

main.ts:67056

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`country_iso_code`](../interfaces/ISerpYahooLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:67050

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_code`](../interfaces/ISerpYahooLocationsResultInfo.md#location_code)

#### Source

main.ts:67037

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

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_code_parent`](../interfaces/ISerpYahooLocationsResultInfo.md#location_code_parent)

#### Source

main.ts:67048

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_name`](../interfaces/ISerpYahooLocationsResultInfo.md#location_name)

#### Source

main.ts:67039

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`ISerpYahooLocationsResultInfo`](../interfaces/ISerpYahooLocationsResultInfo.md).[`location_type`](../interfaces/ISerpYahooLocationsResultInfo.md#location_type)

#### Source

main.ts:67052

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:67065

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:67086

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooLocationsResultInfo`](SerpYahooLocationsResultInfo.md)

#### Source

main.ts:67079
