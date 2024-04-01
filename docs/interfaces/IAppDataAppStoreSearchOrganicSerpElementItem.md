[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppStoreSearchOrganicSerpElementItem

# Interface: IAppDataAppStoreSearchOrganicSerpElementItem

## Hierarchy

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

  ↳ **`IAppDataAppStoreSearchOrganicSerpElementItem`**

## Implemented by

- [`AppDataAppStoreSearchOrganicSerpElementItem`](../classes/AppDataAppStoreSearchOrganicSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataAppStoreSearchOrganicSerpElementItem.md#app_id)
- [icon](IAppDataAppStoreSearchOrganicSerpElementItem.md#icon)
- [is\_free](IAppDataAppStoreSearchOrganicSerpElementItem.md#is_free)
- [position](IAppDataAppStoreSearchOrganicSerpElementItem.md#position)
- [price](IAppDataAppStoreSearchOrganicSerpElementItem.md#price)
- [rank\_absolute](IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_absolute)
- [rank\_group](IAppDataAppStoreSearchOrganicSerpElementItem.md#rank_group)
- [rating](IAppDataAppStoreSearchOrganicSerpElementItem.md#rating)
- [reviews\_count](IAppDataAppStoreSearchOrganicSerpElementItem.md#reviews_count)
- [title](IAppDataAppStoreSearchOrganicSerpElementItem.md#title)
- [url](IAppDataAppStoreSearchOrganicSerpElementItem.md#url)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app

#### Defined in

main.ts:113258

___

### icon

• `Optional` **icon**: `string`

URL to the app icon

#### Defined in

main.ts:113264

___

### is\_free

• `Optional` **is\_free**: `boolean`

indicates whether the app is free

#### Defined in

main.ts:113270

___

### position

• `Optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:113256

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

price of the app

#### Defined in

main.ts:113272

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:113252

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:113249

___

### rating

• `Optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

main.ts:113268

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews of the app

#### Defined in

main.ts:113266

___

### title

• `Optional` **title**: `string`

title of the app

#### Defined in

main.ts:113260

___

### url

• `Optional` **url**: `string`

URL to the app page on App Store

#### Defined in

main.ts:113262
