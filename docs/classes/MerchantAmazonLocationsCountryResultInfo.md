[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantAmazonLocationsCountryResultInfo

# Class: MerchantAmazonLocationsCountryResultInfo

## Implements

- [`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLocationsCountryResultInfo()

> **new MerchantAmazonLocationsCountryResultInfo**(`data`?): [`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md)

#### Returns

[`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

#### Defined in

main.ts:183824

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:183818

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:183808

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_name`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:183810

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:183816

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_type`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:183820

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:183833

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:183854

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

#### Defined in

main.ts:183847
