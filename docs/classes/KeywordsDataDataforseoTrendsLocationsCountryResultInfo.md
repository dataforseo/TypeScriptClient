[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsLocationsCountryResultInfo

# Class: KeywordsDataDataforseoTrendsLocationsCountryResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#constructor)

### Properties

- [country\_iso\_code](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#country_iso_code)
- [geo\_id](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_id)
- [geo\_name](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_name)
- [location\_code](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code)
- [location\_code\_parent](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code_parent)
- [location\_name](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_name)
- [location\_type](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_type)

### Methods

- [init](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsLocationsCountryResultInfo**(`data?`): [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsLocationsCountryResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Defined in

main.ts:124544

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[country_iso_code](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#country_iso_code)

#### Defined in

main.ts:124531

___

### geo\_id

• `Optional` **geo\_id**: `string`

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[geo_id](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_id)

#### Defined in

main.ts:124540

___

### geo\_name

• `Optional` **geo\_name**: `string`

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[geo_name](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#geo_name)

#### Defined in

main.ts:124537

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[location_code](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code)

#### Defined in

main.ts:124518

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

[IKeywordsDataDataforseoTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[location_code_parent](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_code_parent)

#### Defined in

main.ts:124529

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[location_name](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_name)

#### Defined in

main.ts:124520

___

### location\_type

• `Optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md).[location_type](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryResultInfo.md#location_type)

#### Defined in

main.ts:124534

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

main.ts:124553

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

main.ts:124576

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)

#### Defined in

main.ts:124569
