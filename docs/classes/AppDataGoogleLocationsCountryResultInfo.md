[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleLocationsCountryResultInfo

# Class: AppDataGoogleLocationsCountryResultInfo

## Implements

- [`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleLocationsCountryResultInfo()

> **new AppDataGoogleLocationsCountryResultInfo**(`data`?): [`AppDataGoogleLocationsCountryResultInfo`](AppDataGoogleLocationsCountryResultInfo.md)

#### Parameters

##### data?

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md)

#### Returns

[`AppDataGoogleLocationsCountryResultInfo`](AppDataGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:198872

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:198866

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:198854

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:198856

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

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:198864

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IAppDataGoogleLocationsCountryResultInfo`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/IAppDataGoogleLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:198868

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:198881

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:198902

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleLocationsCountryResultInfo`](AppDataGoogleLocationsCountryResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleLocationsCountryResultInfo`](AppDataGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:198895
