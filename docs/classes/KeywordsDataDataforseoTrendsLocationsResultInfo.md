[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsLocationsResultInfo

# Class: KeywordsDataDataforseoTrendsLocationsResultInfo

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsLocationsResultInfo.md#constructor)

### Properties

- [country\_iso\_code](KeywordsDataDataforseoTrendsLocationsResultInfo.md#country_iso_code)
- [geo\_id](KeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_id)
- [geo\_name](KeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_name)
- [location\_code](KeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code)
- [location\_code\_parent](KeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code_parent)
- [location\_name](KeywordsDataDataforseoTrendsLocationsResultInfo.md#location_name)
- [location\_type](KeywordsDataDataforseoTrendsLocationsResultInfo.md#location_type)

### Methods

- [init](KeywordsDataDataforseoTrendsLocationsResultInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsLocationsResultInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsLocationsResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsLocationsResultInfo**(`data?`): [`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsLocationsResultInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Defined in

main.ts:124328

## Properties

### country\_iso\_code

• `Optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[country_iso_code](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:124315

___

### geo\_id

• `Optional` **geo\_id**: `string`

DataForSEO trends location identifier
you can use this field for matching obtained results with the location_code parameter specified in the request

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[geo_id](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_id)

#### Defined in

main.ts:124324

___

### geo\_name

• `Optional` **geo\_name**: `string`

DataForSEO trends location name
you can use this field for matching obtained results with the location_name parameter specified in the request

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[geo_name](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#geo_name)

#### Defined in

main.ts:124321

___

### location\_code

• `Optional` **location\_code**: `number`

location code

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[location_code](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code)

#### Defined in

main.ts:124302

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

[IKeywordsDataDataforseoTrendsLocationsResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[location_code_parent](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_code_parent)

#### Defined in

main.ts:124313

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[location_name](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_name)

#### Defined in

main.ts:124304

___

### location\_type

• `Optional` **location\_type**: `string`

location type
possible values according to Google’s target types

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResultInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md).[location_type](../interfaces/IKeywordsDataDataforseoTrendsLocationsResultInfo.md#location_type)

#### Defined in

main.ts:124318

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

main.ts:124337

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

main.ts:124360

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResultInfo`](KeywordsDataDataforseoTrendsLocationsResultInfo.md)

#### Defined in

main.ts:124353
