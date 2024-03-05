[dataforseo-client](../README.md) / [Exports](../modules.md) / Location

# Class: Location

## Implements

- [`ILocation`](../interfaces/ILocation.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Location.md#constructor)

### Properties

- [latitude](Location.md#latitude)
- [location\_chain](Location.md#location_chain)
- [longitude](Location.md#longitude)
- [maps\_url](Location.md#maps_url)
- [neighborhood](Location.md#neighborhood)
- [neighborhood\_description](Location.md#neighborhood_description)
- [overall\_score](Location.md#overall_score)
- [score\_by\_categories](Location.md#score_by_categories)

### Methods

- [init](Location.md#init)
- [toJSON](Location.md#tojson)
- [fromJS](Location.md#fromjs)

## Constructors

### constructor

• **new Location**(`data?`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocation`](../interfaces/ILocation.md) |

#### Returns

[`Location`](Location.md)

#### Defined in

[main.ts:196906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196906)

## Properties

### latitude

• `Optional` **latitude**: `number`

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

#### Implementation of

[ILocation](../interfaces/ILocation.md).[latitude](../interfaces/ILocation.md#latitude)

#### Defined in

[main.ts:196894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196894)

___

### location\_chain

• `Optional` **location\_chain**: [`LocationChain`](LocationChain.md)[]

elements of the location chain
additional parameters of each element of the location chain

#### Implementation of

[ILocation](../interfaces/ILocation.md).[location_chain](../interfaces/ILocation.md#location_chain)

#### Defined in

[main.ts:196902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196902)

___

### longitude

• `Optional` **longitude**: `number`

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

#### Implementation of

[ILocation](../interfaces/ILocation.md).[longitude](../interfaces/ILocation.md#longitude)

#### Defined in

[main.ts:196899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196899)

___

### maps\_url

• `Optional` **maps\_url**: `string`

url to the location of the hotel in google maps

#### Implementation of

[ILocation](../interfaces/ILocation.md).[maps_url](../interfaces/ILocation.md#maps_url)

#### Defined in

[main.ts:196881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196881)

___

### neighborhood

• `Optional` **neighborhood**: `string`

name of the neighborhood where the hotel is located

#### Implementation of

[ILocation](../interfaces/ILocation.md).[neighborhood](../interfaces/ILocation.md#neighborhood)

#### Defined in

[main.ts:196877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196877)

___

### neighborhood\_description

• `Optional` **neighborhood\_description**: `string`

description of the neighborhood where the hotel is located

#### Implementation of

[ILocation](../interfaces/ILocation.md).[neighborhood_description](../interfaces/ILocation.md#neighborhood_description)

#### Defined in

[main.ts:196879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196879)

___

### overall\_score

• `Optional` **overall\_score**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Implementation of

[ILocation](../interfaces/ILocation.md).[overall_score](../interfaces/ILocation.md#overall_score)

#### Defined in

[main.ts:196886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196886)

___

### score\_by\_categories

• `Optional` **score\_by\_categories**: [`ScoreByCategories`](ScoreByCategories.md)

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;

#### Implementation of

[ILocation](../interfaces/ILocation.md).[score_by_categories](../interfaces/ILocation.md#score_by_categories)

#### Defined in

[main.ts:196889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196889)

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

[main.ts:196915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196915)

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

[main.ts:196943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196943)

___

### fromJS

▸ **fromJS**(`data`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Location`](Location.md)

#### Defined in

[main.ts:196936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196936)
