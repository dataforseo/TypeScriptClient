[Documentation](../README.md) / [Exports](../modules.md) / IMerchantAmazonLocationsResultInfo

# Interface: IMerchantAmazonLocationsResultInfo

## Implemented by

- [`MerchantAmazonLocationsResultInfo`](../classes/MerchantAmazonLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [country\_iso\_code](IMerchantAmazonLocationsResultInfo.md#country_iso_code)
- [location\_code](IMerchantAmazonLocationsResultInfo.md#location_code)
- [location\_name](IMerchantAmazonLocationsResultInfo.md#location_name)
- [location\_name\_parent](IMerchantAmazonLocationsResultInfo.md#location_name_parent)
- [location\_type](IMerchantAmazonLocationsResultInfo.md#location_type)

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Defined in

main.ts:175275

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Defined in

main.ts:175265

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Defined in

main.ts:175267

___

### location\_name\_parent

• `Optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Defined in

main.ts:175273

___

### location\_type

• `Optional` **location\_type**: `string`

location type

#### Defined in

main.ts:175277
