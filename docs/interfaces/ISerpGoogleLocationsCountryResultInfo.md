[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleLocationsCountryResultInfo

# Interface: ISerpGoogleLocationsCountryResultInfo

## Implemented by

- [`SerpGoogleLocationsCountryResultInfo`](../classes/SerpGoogleLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](ISerpGoogleLocationsCountryResultInfo.md#country_iso_code)
- [location\_code](ISerpGoogleLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](ISerpGoogleLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](ISerpGoogleLocationsCountryResultInfo.md#location_name)
- [location\_type](ISerpGoogleLocationsCountryResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

[main.ts:24337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24337)

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

[main.ts:24324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24324)

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Defined in

[main.ts:24335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24335)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

[main.ts:24326](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24326)

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

[main.ts:24339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24339)
