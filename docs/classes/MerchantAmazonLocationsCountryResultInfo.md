[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonLocationsCountryResultInfo

# Class: MerchantAmazonLocationsCountryResultInfo

Defined in: main.ts:191776

## Implements

- [`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLocationsCountryResultInfo()

> **new MerchantAmazonLocationsCountryResultInfo**(`data`?): [`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

Defined in: main.ts:191794

#### Parameters

##### data?

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md)

#### Returns

[`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:191788

ISO country code of the location

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:191778

location code

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:191780

full name of the location

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_name`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:191786

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:191790

location type

#### Implementation of

[`IMerchantAmazonLocationsCountryResultInfo`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md).[`location_type`](../interfaces/IMerchantAmazonLocationsCountryResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:191803

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:191824

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)

Defined in: main.ts:191817

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)
