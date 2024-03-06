[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IHotelLocationInfo

# Interface: IHotelLocationInfo

## Implemented by

- [`HotelLocationInfo`](../classes/HotelLocationInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [latitude](IHotelLocationInfo.md#latitude)
- [location\_chain](IHotelLocationInfo.md#location_chain)
- [longitude](IHotelLocationInfo.md#longitude)
- [maps\_url](IHotelLocationInfo.md#maps_url)
- [neighborhood](IHotelLocationInfo.md#neighborhood)
- [neighborhood\_description](IHotelLocationInfo.md#neighborhood_description)
- [overall\_score](IHotelLocationInfo.md#overall_score)
- [score\_by\_categories](IHotelLocationInfo.md#score_by_categories)

## Properties

### latitude

• `Optional` **latitude**: `number`

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

#### Defined in

[main.ts:195748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195748)

___


### location\_chain

• `Optional` **location\_chain**: [`LocationChain`](../classes/LocationChain.md)[]

elements of the location chain
additional parameters of each element of the location chain

#### Defined in

[main.ts:195756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195756)

___


### longitude

• `Optional` **longitude**: `number`

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

#### Defined in

[main.ts:195753](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195753)

___


### maps\_url

• `Optional` **maps\_url**: `string`

url to the location of the hotel in google maps

#### Defined in

[main.ts:195735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195735)

___


### neighborhood

• `Optional` **neighborhood**: `string`

name of the neighborhood where the hotel is located

#### Defined in

[main.ts:195731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195731)

___


### neighborhood\_description

• `Optional` **neighborhood\_description**: `string`

description of the neighborhood where the hotel is located

#### Defined in

[main.ts:195733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195733)

___


### overall\_score

• `Optional` **overall\_score**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Defined in

[main.ts:195740](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195740)

___


### score\_by\_categories

• `Optional` **score\_by\_categories**: `Object`

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

[main.ts:195743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195743)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")