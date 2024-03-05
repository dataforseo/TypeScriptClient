[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataGoogleLocationsResultInfo

# Interface: IBusinessDataGoogleLocationsResultInfo

## Implemented by

- [`BusinessDataGoogleLocationsResultInfo`](../classes/BusinessDataGoogleLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](IBusinessDataGoogleLocationsResultInfo.md#country_iso_code)
- [location\_code](IBusinessDataGoogleLocationsResultInfo.md#location_code)
- [location\_name](IBusinessDataGoogleLocationsResultInfo.md#location_name)
- [location\_name\_parent](IBusinessDataGoogleLocationsResultInfo.md#location_name_parent)
- [location\_type](IBusinessDataGoogleLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:190243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190243)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:190233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190233)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:190235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190235)

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Defined in

[main.ts:190241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190241)

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

[main.ts:190245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190245)
