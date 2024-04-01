[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsLocationsCountryResultInfo

# Class: KeywordsDataGoogleTrendsLocationsCountryResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#country_iso_code)
- [geo\_id](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_id)
- [geo\_name](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_name)
- [location\_code](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_name)
- [location\_type](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_type)

### Methods

- [init](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsLocationsCountryResultInfo**(`data?`): [`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Defined in

main.ts:121622

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[country_iso_code](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:121609

___

### geo\_id

• `Optional` **geo\_id**: `string`

google trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[geo_id](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_id)

#### Defined in

main.ts:121618

___

### geo\_name

• `Optional` **geo\_name**: `string`

google trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[geo_name](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#geo_name)

#### Defined in

main.ts:121615

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[location_code](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:121596

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

[IKeywordsDataGoogleTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[location_code_parent](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:121607

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[location_name](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:121598

___

### location\_type

• `Optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md).[location_type](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:121612

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

main.ts:121631

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

main.ts:121654

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)

#### Defined in

main.ts:121647
