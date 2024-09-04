[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IAppDataGooglePlayReviewsSearchSerpElementItem

# Interface: IAppDataGooglePlayReviewsSearchSerpElementItem

## Extends

- [`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### helpful\_count?

> `optional` **helpful\_count**: `number`

number of helpful votes
indicates how many users considered the review helpful and voted with the thumbs up icon

#### Defined in

main.ts:191152

***

### id?

> `optional` **id**: `string`

id of the review

#### Defined in

main.ts:191149

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`position`](IBaseAppDataSerpElementItem.md#position)

#### Defined in

main.ts:22068

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_absolute`](IBaseAppDataSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:22064

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rank_group`](IBaseAppDataSerpElementItem.md#rank_group)

#### Defined in

main.ts:22061

***

### rating?

> `optional` **rating**: [`RatingInfo`](../classes/RatingInfo.md)

average rating of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`rating`](IBaseAppDataSerpElementItem.md#rating)

#### Defined in

main.ts:22072

***

### responses?

> `optional` **responses**: [`ResponseDataInfo`](../classes/ResponseDataInfo.md)[]

response from the developer

#### Defined in

main.ts:191158

***

### review\_text?

> `optional` **review\_text**: `string`

content of the review

#### Defined in

main.ts:191154

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:191147

***

### title?

> `optional` **title**: `string`

title of the app

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`title`](IBaseAppDataSerpElementItem.md#title)

#### Defined in

main.ts:22070

***

### type?

> `optional` **type**: `string`

type of element

#### Inherited from

[`IBaseAppDataSerpElementItem`](IBaseAppDataSerpElementItem.md).[`type`](IBaseAppDataSerpElementItem.md#type)

#### Defined in

main.ts:22058

***

### user\_profile?

> `optional` **user\_profile**: [`AppUserProfileInfo`](../classes/AppUserProfileInfo.md)

user profile of the reviewer

#### Defined in

main.ts:191156

***

### version?

> `optional` **version**: `string`

version of the app
version of the app for which the review is submitted

#### Defined in

main.ts:191142
