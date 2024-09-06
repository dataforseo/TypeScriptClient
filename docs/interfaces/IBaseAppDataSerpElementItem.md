[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBaseAppDataSerpElementItem

# Interface: IBaseAppDataSerpElementItem

## Extended by

- [`IAppDataGooglePlaySearchOrganicSerpElementItem`](IAppDataGooglePlaySearchOrganicSerpElementItem.md)
- [`IAppDataAppStoreSearchOrganicSerpElementItem`](IAppDataAppStoreSearchOrganicSerpElementItem.md)
- [`IAppDataGooglePlayInfoOrganicSerpElementItem`](IAppDataGooglePlayInfoOrganicSerpElementItem.md)
- [`IAppDataGooglePlayReviewsSearchSerpElementItem`](IAppDataGooglePlayReviewsSearchSerpElementItem.md)
- [`IAppDataAppStoreInfoOrganicSerpElementItem`](IAppDataAppStoreInfoOrganicSerpElementItem.md)
- [`IAppDataAppStoreReviewsSearchSerpElementItem`](IAppDataAppStoreReviewsSearchSerpElementItem.md)

## Properties

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:22073

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Defined in

main.ts:22069

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:22066

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Defined in

main.ts:22077

***

### title?

> `optional` **title**: `string`

title of the app

#### Defined in

main.ts:22075

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:22063
