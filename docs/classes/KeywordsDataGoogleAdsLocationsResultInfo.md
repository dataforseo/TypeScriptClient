[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsLocationsResultInfo

# Class: KeywordsDataGoogleAdsLocationsResultInfo

## Implements

- [`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](KeywordsDataGoogleAdsLocationsResultInfo.md#country_iso_code)
- [location\_code](KeywordsDataGoogleAdsLocationsResultInfo.md#location_code)
- [location\_code\_parent](KeywordsDataGoogleAdsLocationsResultInfo.md#location_code_parent)
- [location\_name](KeywordsDataGoogleAdsLocationsResultInfo.md#location_name)
- [location\_type](KeywordsDataGoogleAdsLocationsResultInfo.md#location_type)

### Methods

- [init](KeywordsDataGoogleAdsLocationsResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsLocationsResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsLocationsResultInfo**(`data?`): [`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsLocationsResultInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

#### Defined in

main.ts:113264

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResultInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[country_iso_code](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:113257

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResultInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_code)

#### Defined in

main.ts:113244

___

### location\_code\_parent

• `Optional` **location\_code\_parent**: `number`

the code of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_code_parent": 20044
where location_code_parent corresponds to:
"location_code": 20044,
"location_name": "Lower Austria,Austria"

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResultInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[location_code_parent](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:113255

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResultInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[location_name](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_name)

#### Defined in

main.ts:113246

___

### location\_type

• `Optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[IKeywordsDataGoogleAdsLocationsResultInfo](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md).[location_type](../interfaces/IKeywordsDataGoogleAdsLocationsResultInfo.md#location_type)

#### Defined in

main.ts:113260

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:113273

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:113294

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)

#### Defined in

main.ts:113287
