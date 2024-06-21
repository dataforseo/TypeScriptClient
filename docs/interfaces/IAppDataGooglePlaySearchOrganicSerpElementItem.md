**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppDataGooglePlaySearchOrganicSerpElementItem

# Interface: IAppDataGooglePlaySearchOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

id of the app

#### Source

main.ts:113277

***

### developer?

> **`optional`** **developer**: `string`

name of the app developer

#### Source

main.ts:113293

***

### developer\_url?

> **`optional`** **developer\_url**: `string`

URL to the developer page on Google Play

#### Source

main.ts:113295

***

### icon?

> **`optional`** **icon**: `string`

URL to the app icon

#### Source

main.ts:113283

***

### is\_free?

> **`optional`** **is\_free**: `boolean`

indicates whether the app is free

#### Source

main.ts:113289

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:113275

***

### price?

> **`optional`** **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Source

main.ts:113291

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Source

main.ts:113271

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:113268

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Source

main.ts:113287

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews of the app

#### Source

main.ts:113285

***

### title?

> **`optional`** **title**: `string`

title of the app

#### Source

main.ts:113279

***

### url?

> **`optional`** **url**: `string`

URL to the app page on Google Play

#### Source

main.ts:113281
