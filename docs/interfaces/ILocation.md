[**Documentation**](../README.md)

***

[Documentation](../README.md) / ILocation

# Interface: ILocation

Defined in: main.ts:221192

## Indexable

\[`key`: `string`\]: `any`

## Properties

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:221211

hotel latitude
latitude coordinates of the hotel’s location
example:
39.4806397

***

### location\_chain?

> `optional` **location\_chain**: [`LocationChain`](../classes/LocationChain.md)[]

Defined in: main.ts:221219

elements of the location chain
additional parameters of each element of the location chain

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:221216

hotel longitude
latitude coordinates of the hotel’s location
example:
-106.0512973

***

### maps\_url?

> `optional` **maps\_url**: `string`

Defined in: main.ts:221198

url to the location of the hotel in google maps

***

### neighborhood?

> `optional` **neighborhood**: `string`

Defined in: main.ts:221194

name of the neighborhood where the hotel is located

***

### neighborhood\_description?

> `optional` **neighborhood\_description**: `string`

Defined in: main.ts:221196

description of the neighborhood where the hotel is located

***

### overall\_score?

> `optional` **overall\_score**: `number`

Defined in: main.ts:221203

overall score of the hotel location
indicates the overall score of the hotel’s location in the range from 1 to 5;
calculated based on data from the hotel’s proximity to nearby things to do and restaurants, transportation, and airports;
note that the criteria are not weighted equally in the overall score

***

### score\_by\_categories?

> `optional` **score\_by\_categories**: [`ScoreByCategories`](../classes/ScoreByCategories.md)

Defined in: main.ts:221206

category scores of the hotel location
the scores of the hotel’s location tied to the categories that indicate the proximity to nearby things to do, restaurants, transportation, and airports;
