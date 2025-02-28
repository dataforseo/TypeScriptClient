[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantGoogleLocationsResultInfo

# Class: MerchantGoogleLocationsResultInfo

Defined in: main.ts:185226

## Implements

- [`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleLocationsResultInfo()

> **new MerchantGoogleLocationsResultInfo**(`data`?): [`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

Defined in: main.ts:185243

#### Parameters

##### data?

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md)

#### Returns

[`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:185237

ISO country code of the location

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IMerchantGoogleLocationsResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:185228

location code

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:185230

full name of the location

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_name`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_name)

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `string`

Defined in: main.ts:185235

the name of the superordinate location
example:
"location_name": "Arkansas,United States",
"location_name_parent": "United States"

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_name_parent)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:185239

location type

#### Implementation of

[`IMerchantGoogleLocationsResultInfo`](../interfaces/IMerchantGoogleLocationsResultInfo.md).[`location_type`](../interfaces/IMerchantGoogleLocationsResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:185252

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:185273

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)

Defined in: main.ts:185266

#### Parameters

##### data

`any`

#### Returns

[`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)
