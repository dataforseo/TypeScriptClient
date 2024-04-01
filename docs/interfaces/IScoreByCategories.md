[Documentation](../README.md) / [Exports](../modules.md) / IScoreByCategories

# Interface: IScoreByCategories

## Implemented by

- [`ScoreByCategories`](../classes/ScoreByCategories.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [airport\_access](IScoreByCategories.md#airport_access)
- [overall](IScoreByCategories.md#overall)
- [restaurants](IScoreByCategories.md#restaurants)
- [things\_to\_do](IScoreByCategories.md#things_to_do)
- [transit](IScoreByCategories.md#transit)

## Properties

### airport\_access

• `Optional` **airport\_access**: `number`

score relative to nearby airports
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby airports

#### Defined in

main.ts:202331

___

### overall

• `Optional` **overall**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Defined in

main.ts:202315

___

### restaurants

• `Optional` **restaurants**: `number`

score relative to nearby restaurants
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby restaurants

#### Defined in

main.ts:202323

___

### things\_to\_do

• `Optional` **things\_to\_do**: `number`

score relative to nearby things to do
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do

#### Defined in

main.ts:202319

___

### transit

• `Optional` **transit**: `number`

score relative to nearby transit options
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby transit options

#### Defined in

main.ts:202327
