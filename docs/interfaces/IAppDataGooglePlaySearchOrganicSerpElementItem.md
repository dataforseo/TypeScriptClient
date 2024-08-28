[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IAppDataGooglePlaySearchOrganicSerpElementItem

# Interface: IAppDataGooglePlaySearchOrganicSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### app\_id?

> `optional` **app\_id**: `string`

id of the app

#### Defined in

main.ts:115072

***

### developer?

> `optional` **developer**: `string`

name of the app developer

#### Defined in

main.ts:115088

***

### developer\_url?

> `optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Defined in

main.ts:115090

***

### icon?

> `optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:115078

***

### is\_free?

> `optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:115084

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:115070

***

### price?

> `optional` **price**: [`Price`](../classes/Price.md)

price of the app

#### Defined in

main.ts:115086

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:115066

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:115063

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

main.ts:115082

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Defined in

main.ts:115080

***

### title?

> `optional` **title**: `string`

title of the app

#### Defined in

main.ts:115074

***

### url?

> `optional` **url**: `string`

URL to the app page on Google Play

#### Defined in

main.ts:115076
