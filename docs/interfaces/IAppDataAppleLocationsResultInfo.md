[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleLocationsResultInfo

# Interface: IAppDataAppleLocationsResultInfo

## Implemented by

- [`AppDataAppleLocationsResultInfo`](../classes/AppDataAppleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](IAppDataAppleLocationsResultInfo.md#country_iso_code)
- [location\_code](IAppDataAppleLocationsResultInfo.md#location_code)
- [location\_name](IAppDataAppleLocationsResultInfo.md#location_name)
- [location\_name\_parent](IAppDataAppleLocationsResultInfo.md#location_name_parent)
- [location\_type](IAppDataAppleLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:182931

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

main.ts:182918

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:182920

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `number`

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"
note: Apple App Data API currently supports countries only, that is why this value will always be null

#### Defined in

main.ts:182929

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

main.ts:182933
