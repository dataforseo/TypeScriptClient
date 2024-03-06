[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / HotelLocationInfo

# Class: HotelLocationInfo

## Implements

- [`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HotelLocationInfo.md#constructor)

### Properties

- [latitude](HotelLocationInfo.md#latitude)
- [location\_chain](HotelLocationInfo.md#location_chain)
- [longitude](HotelLocationInfo.md#longitude)
- [maps\_url](HotelLocationInfo.md#maps_url)
- [neighborhood](HotelLocationInfo.md#neighborhood)
- [neighborhood\_description](HotelLocationInfo.md#neighborhood_description)
- [overall\_score](HotelLocationInfo.md#overall_score)
- [score\_by\_categories](HotelLocationInfo.md#score_by_categories)

### Methods

- [init](HotelLocationInfo.md#init)
- [toJSON](HotelLocationInfo.md#tojson)
- [fromJS](HotelLocationInfo.md#fromjs)

## Constructors

### constructor

• **new HotelLocationInfo**(`data?`): [`HotelLocationInfo`](HotelLocationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHotelLocationInfo`](../interfaces/IHotelLocationInfo.md) |

#### Returns

[`HotelLocationInfo`](HotelLocationInfo.md)

#### Defined in

[main.ts:195658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195658)

## Properties

### latitude

• `Optional` **latitude**: `number`

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

#### Implementation of

[IHotelLocationInfo](../interfaces/IHotelLocationInfo.md).[latitude](../interfaces/IHotelLocationInfo.md#latitude)

#### Defined in

[main.ts:195646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195646)

___


### location\_chain

• `Optional` **location\_chain**: [`LocationChain`](LocationChain.md)[]

elements of the location chain
additional parameters of each element of the location chain

#### Implementation of

[IHotelLocationInfo](../interfaces/IHotelLocationInfo.md).[location_chain](../interfaces/IHotelLocationInfo.md#location_chain)

#### Defined in

[main.ts:195654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195654)

___


### longitude

• `Optional` **longitude**: `number`

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

#### Implementation of

[IHotelLocationInfo](../interfaces/IHotelLocationInfo.md).[longitude](../interfaces/IHotelLocationInfo.md#longitude)

#### Defined in

[main.ts:195651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195651)

___


### maps\_url

• `Optional` **maps\_url**: `string`

url to the location of the hotel in google maps

#### Implementation of

[IHotelLocationInfo](../interfaces/IHotelLocationInfo.md).[maps_url](../interfaces/IHotelLocationInfo.md#maps_url)

#### Defined in

[main.ts:195633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195633)

___


### neighborhood

• `Optional` **neighborhood**: `string`

name of the neighborhood where the hotel is located

#### Implementation of

[IHotelLocationInfo](../interfaces/IHotelLocationInfo.md).[neighborhood](../interfaces/IHotelLocationInfo.md#neighborhood)

#### Defined in

[main.ts:195629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195629)

___


### neighborhood\_description

• `Optional` **neighborhood\_description**: `string`

description of the neighborhood where the hotel is located

#### Implementation of

[IHotelLocationInfo](../interfaces/IHotelLocationInfo.md).[neighborhood_description](../interfaces/IHotelLocationInfo.md#neighborhood_description)

#### Defined in

[main.ts:195631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195631)

___


### overall\_score

• `Optional` **overall\_score**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[IHotelLocationInfo](../interfaces/IHotelLocationInfo.md).[overall_score](../interfaces/IHotelLocationInfo.md#overall_score)

#### Defined in

[main.ts:195638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195638)

___


### score\_by\_categories

• `Optional` **score\_by\_categories**: `Object`

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;

#### Index signature

▪ [key: `string`]: `number`

#### Implementation of

[IHotelLocationInfo](../interfaces/IHotelLocationInfo.md).[score_by_categories](../interfaces/IHotelLocationInfo.md#score_by_categories)

#### Defined in

[main.ts:195641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195641)

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

[main.ts:195667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195667)

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

[main.ts:195701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195701)

___


### fromJS

▸ **fromJS**(`data`): [`HotelLocationInfo`](HotelLocationInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HotelLocationInfo`](HotelLocationInfo.md)

#### Defined in

[main.ts:195694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195694)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")