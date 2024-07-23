**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IHotelLocationInfo

# Interface: IHotelLocationInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### latitude?

> **`optional`** **latitude**: `number`

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

#### Source

main.ts:208823

***

### location\_chain?

> **`optional`** **location\_chain**: [`LocationChain`](../classes/LocationChain.md)[]

elements of the location chain
additional parameters of each element of the location chain

#### Source

main.ts:208831

***

### longitude?

> **`optional`** **longitude**: `number`

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

#### Source

main.ts:208828

***

### maps\_url?

> **`optional`** **maps\_url**: `string`

url to the location of the hotel in google maps

#### Source

main.ts:208810

***

### neighborhood?

> **`optional`** **neighborhood**: `string`

name of the neighborhood where the hotel is located

#### Source

main.ts:208806

***

### neighborhood\_description?

> **`optional`** **neighborhood\_description**: `string`

description of the neighborhood where the hotel is located

#### Source

main.ts:208808

***

### overall\_score?

> **`optional`** **overall\_score**: `number`

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

#### Source

main.ts:208815

***

### score\_by\_categories?

> **`optional`** **score\_by\_categories**: `Object`

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:208818
