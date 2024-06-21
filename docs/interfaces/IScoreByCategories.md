**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IScoreByCategories

# Interface: IScoreByCategories

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### airport\_access?

> **`optional`** **airport\_access**: `number`

score relative to nearby airports
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby airports

#### Source

main.ts:206474

***

### overall?

> **`optional`** **overall**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Source

main.ts:206458

***

### restaurants?

> **`optional`** **restaurants**: `number`

score relative to nearby restaurants
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby restaurants

#### Source

main.ts:206466

***

### things\_to\_do?

> **`optional`** **things\_to\_do**: `number`

score relative to nearby things to do
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do

#### Source

main.ts:206462

***

### transit?

> **`optional`** **transit**: `number`

score relative to nearby transit options
indicates the score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby transit options

#### Source

main.ts:206470
