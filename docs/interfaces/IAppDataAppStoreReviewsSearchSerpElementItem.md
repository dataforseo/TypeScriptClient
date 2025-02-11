[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppDataAppStoreReviewsSearchSerpElementItem

# Interface: IAppDataAppStoreReviewsSearchSerpElementItem

Defined in: main.ts:208941

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:208951

id of the review

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22971

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`position`](IBaseAppDataSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22967

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_absolute`](IBaseAppDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22964

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_group`](IBaseAppDataSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

Defined in: main.ts:22975

average rating of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rating`](IBaseAppDataSerpElementItem.md#rating)

***

### review\_text?

> `optional` **review\_text**: `string`

Defined in: main.ts:208953

content of the review

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:208949

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:22973

title of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`title`](IBaseAppDataSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22961

type of element

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`type`](IBaseAppDataSerpElementItem.md#type)

***

### user\_profile?

> `optional` **user\_profile**: [`AppUserProfileInfo`](../classes/AppUserProfileInfo.md)

Defined in: main.ts:208955

user profile of the reviewer

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:208944

version of the app
version of the app for which the review is submitted
