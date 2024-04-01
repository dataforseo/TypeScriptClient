[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGooglePlaySearchOrganicSerpElementItem

# Interface: IAppDataGooglePlaySearchOrganicSerpElementItem

## Hierarchy

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

  ↳ **`IAppDataGooglePlaySearchOrganicSerpElementItem`**

## Implemented by

- [`AppDataGooglePlaySearchOrganicSerpElementItem`](../classes/AppDataGooglePlaySearchOrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataGooglePlaySearchOrganicSerpElementItem.md#app_id)
- [developer](IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer)
- [developer\_url](IAppDataGooglePlaySearchOrganicSerpElementItem.md#developer_url)
- [icon](IAppDataGooglePlaySearchOrganicSerpElementItem.md#icon)
- [is\_free](IAppDataGooglePlaySearchOrganicSerpElementItem.md#is_free)
- [position](IAppDataGooglePlaySearchOrganicSerpElementItem.md#position)
- [price](IAppDataGooglePlaySearchOrganicSerpElementItem.md#price)
- [rank\_absolute](IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_absolute)
- [rank\_group](IAppDataGooglePlaySearchOrganicSerpElementItem.md#rank_group)
- [rating](IAppDataGooglePlaySearchOrganicSerpElementItem.md#rating)
- [reviews\_count](IAppDataGooglePlaySearchOrganicSerpElementItem.md#reviews_count)
- [title](IAppDataGooglePlaySearchOrganicSerpElementItem.md#title)
- [url](IAppDataGooglePlaySearchOrganicSerpElementItem.md#url)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app

#### Defined in

main.ts:110962

___

### developer

• `Optional` **developer**: `string`

name of the app developer

#### Defined in

main.ts:110978

___

### developer\_url

• `Optional` **developer\_url**: `string`

URL to the developer page on Google Play

#### Defined in

main.ts:110980

___

### icon

• `Optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:110968

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:110974

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:110960

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Defined in

main.ts:110976

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:110956

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:110953

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

main.ts:110972

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Defined in

main.ts:110970

___

### title

• `Optional` **title**: `string`

title of the app

#### Defined in

main.ts:110964

___

### url

• `Optional` **url**: `string`

URL to the app page on Google Play

#### Defined in

main.ts:110966
