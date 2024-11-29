[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleExtendedReviewsTaskGetResultInfo

# Class: BusinessDataGoogleExtendedReviewsTaskGetResultInfo

## Implements

- [`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleExtendedReviewsTaskGetResultInfo()

> **new BusinessDataGoogleExtendedReviewsTaskGetResultInfo**(`data`?): [`BusinessDataGoogleExtendedReviewsTaskGetResultInfo`](BusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

#### Parameters

##### data?

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleExtendedReviewsTaskGetResultInfo`](BusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:223494

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#check_url)

#### Defined in

main.ts:223458

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#cid)

#### Defined in

main.ts:223482

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#datetime)

#### Defined in

main.ts:223463

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#feature_id)

#### Defined in

main.ts:223475

***

### items?

> `optional` **items**: [`BusinessDataGoogleExtendedReviewsTaskGetItem`](BusinessDataGoogleExtendedReviewsTaskGetItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#items)

#### Defined in

main.ts:223490

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#items_count)

#### Defined in

main.ts:223487

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:223447

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:223455

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:223453

***

### place\_id?

> `optional` **place\_id**: `string`

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`place_id`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#place_id)

#### Defined in

main.ts:223478

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#rating)

#### Defined in

main.ts:223472

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#reviews_count)

#### Defined in

main.ts:223484

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#se_domain)

#### Defined in

main.ts:223451

***

### sub\_title?

> `optional` **sub\_title**: `string`

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`sub_title`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#sub_title)

#### Defined in

main.ts:223469

***

### title?

> `optional` **title**: `string`

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#title)

#### Defined in

main.ts:223466

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#type)

#### Defined in

main.ts:223449

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:223503

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:223539

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleExtendedReviewsTaskGetResultInfo`](BusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleExtendedReviewsTaskGetResultInfo`](BusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

#### Defined in

main.ts:223532
