[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleLocationsCountryResultInfo

# Class: AppDataGoogleLocationsCountryResultInfo

Defined in: main.ts:199422

## Implements

- [`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleLocationsCountryResultInfo()

> **new AppDataGoogleLocationsCountryResultInfo**(`data`?): [`AppDataGoogleLocationsCountryResultInfo`](AppDataGoogleLocationsCountryResultInfo.md)

Defined in: main.ts:199442

#### Parameters

##### data?

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md)

#### Returns

[`AppDataGoogleLocationsCountryResultInfo`](AppDataGoogleLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:199436

ISO country code of the location

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:199424

location code

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:199426

full name of the location

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:199434

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:199438

location type

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:199451

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:199472

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleLocationsCountryResultInfo`](AppDataGoogleLocationsCountryResultInfo.md)

Defined in: main.ts:199465

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleLocationsCountryResultInfo`](AppDataGoogleLocationsCountryResultInfo.md)
