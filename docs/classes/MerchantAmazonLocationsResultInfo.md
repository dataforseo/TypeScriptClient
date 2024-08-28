[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / MerchantAmazonLocationsResultInfo

# Class: MerchantAmazonLocationsResultInfo

## Implements

- [`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLocationsResultInfo()

> **new MerchantAmazonLocationsResultInfo**(`data`?): [`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md)

#### Returns

[`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Defined in

main.ts:183632

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`country_iso_code`](../interfaces/IMerchantAmazonLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:183626

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_code)

#### Defined in

main.ts:183616

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_name`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_name)

#### Defined in

main.ts:183618

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_name_parent`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_name_parent)

#### Defined in

main.ts:183624

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_type`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_type)

#### Defined in

main.ts:183628

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:183641

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:183662

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Defined in

main.ts:183655
