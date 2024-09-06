[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / MerchantGoogleLocationsCountryResultInfo

# Class: MerchantGoogleLocationsCountryResultInfo

## Implements

- [`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleLocationsCountryResultInfo()

> **new MerchantGoogleLocationsCountryResultInfo**(`data`?): [`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md)

#### Returns

[`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:173414

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:173408

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:173399

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`location_name`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:173401

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_name": "Arkansas,United States",
"location_name_parent": "United States"

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_name_parent)

#### Defined in

main.ts:173406

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IMerchantGoogleLocationsCountryResultInfo`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md).[`location_type`](../interfaces/IMerchantGoogleLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:173410

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:173423

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:173444

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)

#### Defined in

main.ts:173437
