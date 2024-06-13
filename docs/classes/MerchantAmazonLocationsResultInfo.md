**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonLocationsResultInfo

# Class: MerchantAmazonLocationsResultInfo

## Implements

- [`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLocationsResultInfo(data)

> **new MerchantAmazonLocationsResultInfo**(`data`?): [`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md)

#### Returns

[`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Source

main.ts:177989

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`country_iso_code`](../interfaces/IMerchantAmazonLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:177983

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_code)

#### Source

main.ts:177973

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_name`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_name)

#### Source

main.ts:177975

***

### location\_name\_parent?

> **`optional`** **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_name_parent`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_name_parent)

#### Source

main.ts:177981

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_type`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_type)

#### Source

main.ts:177985

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:177998

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:178019

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

#### Source

main.ts:178012
