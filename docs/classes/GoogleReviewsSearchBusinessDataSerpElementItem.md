[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleReviewsSearchBusinessDataSerpElementItem

# Class: GoogleReviewsSearchBusinessDataSerpElementItem

## Hierarchy

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)
  
  ↳ **`GoogleReviewsSearchBusinessDataSerpElementItem`**

## Implements

- [`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleReviewsSearchBusinessDataSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleReviewsSearchBusinessDataSerpElementItem.md#_discriminator)
- [images](GoogleReviewsSearchBusinessDataSerpElementItem.md#images)
- [local\_guide](GoogleReviewsSearchBusinessDataSerpElementItem.md#local_guide)
- [original\_owner\_answer](GoogleReviewsSearchBusinessDataSerpElementItem.md#original_owner_answer)
- [original\_review\_text](GoogleReviewsSearchBusinessDataSerpElementItem.md#original_review_text)
- [owner\_answer](GoogleReviewsSearchBusinessDataSerpElementItem.md#owner_answer)
- [owner\_time\_ago](GoogleReviewsSearchBusinessDataSerpElementItem.md#owner_time_ago)
- [owner\_timestamp](GoogleReviewsSearchBusinessDataSerpElementItem.md#owner_timestamp)
- [photos\_count](GoogleReviewsSearchBusinessDataSerpElementItem.md#photos_count)
- [position](GoogleReviewsSearchBusinessDataSerpElementItem.md#position)
- [profile\_image\_url](GoogleReviewsSearchBusinessDataSerpElementItem.md#profile_image_url)
- [profile\_name](GoogleReviewsSearchBusinessDataSerpElementItem.md#profile_name)
- [profile\_url](GoogleReviewsSearchBusinessDataSerpElementItem.md#profile_url)
- [rank\_absolute](GoogleReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleReviewsSearchBusinessDataSerpElementItem.md#rank_group)
- [rating](GoogleReviewsSearchBusinessDataSerpElementItem.md#rating)
- [review\_id](GoogleReviewsSearchBusinessDataSerpElementItem.md#review_id)
- [review\_text](GoogleReviewsSearchBusinessDataSerpElementItem.md#review_text)
- [review\_url](GoogleReviewsSearchBusinessDataSerpElementItem.md#review_url)
- [reviews\_count](GoogleReviewsSearchBusinessDataSerpElementItem.md#reviews_count)
- [time\_ago](GoogleReviewsSearchBusinessDataSerpElementItem.md#time_ago)
- [timestamp](GoogleReviewsSearchBusinessDataSerpElementItem.md#timestamp)
- [xpath](GoogleReviewsSearchBusinessDataSerpElementItem.md#xpath)

### Methods

- [init](GoogleReviewsSearchBusinessDataSerpElementItem.md#init)
- [toJSON](GoogleReviewsSearchBusinessDataSerpElementItem.md#tojson)
- [fromJS](GoogleReviewsSearchBusinessDataSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleReviewsSearchBusinessDataSerpElementItem**(`data?`): [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleReviewsSearchBusinessDataSerpElementItem`](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md) |

#### Returns

[`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[constructor](BaseBusinessDataSerpElementItem.md#constructor)

#### Defined in

[main.ts:198228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198228)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[_discriminator](BaseBusinessDataSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20076](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20076)

___


### images

• `Optional` **images**: [`ImagesElement`](ImagesElement.md)[]

images submitted by the reviewer

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[images](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#images)

#### Defined in

[main.ts:198224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198224)

___


### local\_guide

• `Optional` **local\_guide**: `boolean`

indicates whether the reviewer has a ‘local guide’ status

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[local_guide](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#local_guide)

#### Defined in

[main.ts:198196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198196)

___


### original\_owner\_answer

• `Optional` **original\_owner\_answer**: `string`

original text of the owner’s response
the original response to the review, no auto-translate applied

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[original_owner_answer](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_owner_answer)

#### Defined in

[main.ts:198210](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198210)

___


### original\_review\_text

• `Optional` **original\_review\_text**: `string`

original content of the review
the original content of the review, no auto-translate applied

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[original_review_text](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#original_review_text)

#### Defined in

[main.ts:198180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198180)

___


### owner\_answer

• `Optional` **owner\_answer**: `string`

text of the owner’s response
the owner’s response to the review

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[owner_answer](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_answer)

#### Defined in

[main.ts:198207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198207)

___


### owner\_time\_ago

• `Optional` **owner\_time\_ago**: `string`

publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[owner_time_ago](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_time_ago)

#### Defined in

[main.ts:198213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198213)

___


### owner\_timestamp

• `Optional` **owner\_timestamp**: `string`

date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[owner_timestamp](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#owner_timestamp)

#### Defined in

[main.ts:198218](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198218)

___


### photos\_count

• `Optional` **photos\_count**: `number`

total number of photos submitted by the reviewer

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[photos_count](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#photos_count)

#### Defined in

[main.ts:198194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198194)

___


### position

• `Optional` **position**: `string`

the alignment of the review in SERP
can take the following values: right

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[position](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#position)

#### Defined in

[main.ts:198173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198173)

___


### profile\_image\_url

• `Optional` **profile\_image\_url**: `string`

URL of the reviewer’s profile image

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[profile_image_url](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_image_url)

#### Defined in

[main.ts:198204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198204)

___


### profile\_name

• `Optional` **profile\_name**: `string`

profile name of the reviewer

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[profile_name](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_name)

#### Defined in

[main.ts:198198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198198)

___


### profile\_url

• `Optional` **profile\_url**: `string`

URL of the reviewer’s profile

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[profile_url](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#profile_url)

#### Defined in

[main.ts:198200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198200)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank among all the listed reviews
absolute position among all reviews on the list

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[rank_absolute](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:198170](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198170)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[rank_group](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rank_group)

#### Defined in

[main.ts:198167](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198167)

___


### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the rating score submitted by the reviewer

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[rating](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#rating)

#### Defined in

[main.ts:198190](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198190)

___


### review\_id

• `Optional` **review\_id**: `string`

the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[review_id](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_id)

#### Defined in

[main.ts:198222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198222)

___


### review\_text

• `Optional` **review\_text**: `string`

the content of the review

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[review_text](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_text)

#### Defined in

[main.ts:198177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198177)

___


### review\_url

• `Optional` **review\_url**: `string`

the URL of the review

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[review_url](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#review_url)

#### Defined in

[main.ts:198202](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198202)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

total number of reviews submitted by the reviewer

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[reviews_count](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#reviews_count)

#### Defined in

[main.ts:198192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198192)

___


### time\_ago

• `Optional` **time\_ago**: `string`

the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[time_ago](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#time_ago)

#### Defined in

[main.ts:198183](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198183)

___


### timestamp

• `Optional` **timestamp**: `string`

date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[timestamp](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#timestamp)

#### Defined in

[main.ts:198188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198188)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the review

#### Implementation of

[IGoogleReviewsSearchBusinessDataSerpElementItem](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md).[xpath](../interfaces/IGoogleReviewsSearchBusinessDataSerpElementItem.md#xpath)

#### Defined in

[main.ts:198175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198175)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[init](BaseBusinessDataSerpElementItem.md#init)

#### Defined in

[main.ts:198233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198233)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[toJSON](BaseBusinessDataSerpElementItem.md#tojson)

#### Defined in

[main.ts:198276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198276)

___


### fromJS

▸ **fromJS**(`data`): [`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleReviewsSearchBusinessDataSerpElementItem`](GoogleReviewsSearchBusinessDataSerpElementItem.md)

#### Overrides

[BaseBusinessDataSerpElementItem](BaseBusinessDataSerpElementItem.md).[fromJS](BaseBusinessDataSerpElementItem.md#fromjs)

#### Defined in

[main.ts:198269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198269)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")