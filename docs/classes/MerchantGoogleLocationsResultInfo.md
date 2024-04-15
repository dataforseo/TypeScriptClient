**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleLocationsResultInfo

# Class: MerchantGoogleLocationsResultInfo

## Implements

- [`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleLocationsResultInfo(data)

> **new MerchantGoogleLocationsResultInfo**(`data`?): [`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md)

#### Returns

[`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

#### Source

main.ts:169109

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IMerchantGoogleLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:169103

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_code)

#### Source

main.ts:169094

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_name`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_name)

#### Source

main.ts:169096

***

### location\_name\_parent?

> **`optional`** **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_name": "Arkansas,United States",
"location_name_parent": "United States"

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_name_parent)

#### Source

main.ts:169101

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_type`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_type)

#### Source

main.ts:169105

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:169118

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:169139

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

#### Source

main.ts:169132
