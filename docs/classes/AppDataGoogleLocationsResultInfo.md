[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGoogleLocationsResultInfo

# Class: AppDataGoogleLocationsResultInfo

## Implements

- [`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleLocationsResultInfo()

> **new AppDataGoogleLocationsResultInfo**(`data`?): [`AppDataGoogleLocationsResultInfo`](AppDataGoogleLocationsResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md)

#### Returns

[`AppDataGoogleLocationsResultInfo`](AppDataGoogleLocationsResultInfo.md)

#### Defined in

main.ts:186545

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IAppDataGoogleLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:186539

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_code)

#### Defined in

main.ts:186527

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`location_name`](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_name)

#### Defined in

main.ts:186529

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:186537

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IAppDataGoogleLocationsResultInfo`](../interfaces/IAppDataGoogleLocationsResultInfo.md).[`location_type`](../interfaces/IAppDataGoogleLocationsResultInfo.md#location_type)

#### Defined in

main.ts:186541

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:186554

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:186575

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleLocationsResultInfo`](AppDataGoogleLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleLocationsResultInfo`](AppDataGoogleLocationsResultInfo.md)

#### Defined in

main.ts:186568
