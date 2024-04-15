**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonLocationsCountryResultInfo

# Class: MerchantAmazonLocationsCountryResultInfo

## Implements

- [`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLocationsCountryResultInfo(data)

> **new MerchantAmazonLocationsCountryResultInfo**(`data`?): [`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md)

#### Returns

[`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

#### Source

main.ts:175560

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#country_iso_code)

#### Source

main.ts:175554

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_code)

#### Source

main.ts:175544

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_name`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_name)

#### Source

main.ts:175546

***

### location\_name\_parent?

> **`optional`** **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_name_parent)

#### Source

main.ts:175552

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_type`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_type)

#### Source

main.ts:175556

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:175569

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:175590

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

#### Source

main.ts:175583
