[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGoogleLocationsResultInfo

# Interface: IAppDataGoogleLocationsResultInfo

## Implemented by

- [`AppDataGoogleLocationsResultInfo`](../classes/AppDataGoogleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](IAppDataGoogleLocationsResultInfo.md#country_iso_code)
- [location\_code](IAppDataGoogleLocationsResultInfo.md#location_code)
- [location\_name](IAppDataGoogleLocationsResultInfo.md#location_name)
- [location\_name\_parent](IAppDataGoogleLocationsResultInfo.md#location_name_parent)
- [location\_type](IAppDataGoogleLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:177213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177213)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:177201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177201)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:177203](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177203)

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"

#### Defined in

[main.ts:177211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177211)

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

[main.ts:177215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177215)
