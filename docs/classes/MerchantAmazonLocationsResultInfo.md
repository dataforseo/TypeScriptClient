[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonLocationsResultInfo

# Class: MerchantAmazonLocationsResultInfo

Defined in: main.ts:191584

## Implements

- [`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonLocationsResultInfo()

> **new MerchantAmazonLocationsResultInfo**(`data`?): [`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

Defined in: main.ts:191602

#### Parameters

##### data?

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md)

#### Returns

[`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:191596

ISO country code of the location

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`country_iso_code`](../interfaces/IMerchantAmazonLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:191586

location code

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:191588

full name of the location

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_name`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:191594

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "90290,California,United States",
"location_name_parent": "California,United States"

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_name_parent`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:191598

location type

#### Implementation of

[`IMerchantAmazonLocationsResultInfo`](../interfaces/IMerchantAmazonLocationsResultInfo.md).[`location_type`](../interfaces/IMerchantAmazonLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:191611

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:191632

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)

Defined in: main.ts:191625

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonLocationsResultInfo`](MerchantAmazonLocationsResultInfo.md)
