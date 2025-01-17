[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleExtendedReviewsTaskGetResultInfo

# Class: BusinessDataGoogleExtendedReviewsTaskGetResultInfo

Defined in: main.ts:223512

## Implements

- [`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleExtendedReviewsTaskGetResultInfo()

> **new BusinessDataGoogleExtendedReviewsTaskGetResultInfo**(`data`?): [`BusinessDataGoogleExtendedReviewsTaskGetResultInfo`](BusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

Defined in: main.ts:223562

#### Parameters

##### data?

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

#### Returns

[`BusinessDataGoogleExtendedReviewsTaskGetResultInfo`](BusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:223526

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#check_url)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:223550

google-defined client id
unique id of a local establishment
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`cid`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#cid)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:223531

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#datetime)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:223543

the unique identifier of the ‘reviews’ element in SERP
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`feature_id`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#feature_id)

***

### items?

> `optional` **items**: [`BusinessDataGoogleExtendedReviewsTaskGetItem`](BusinessDataGoogleExtendedReviewsTaskGetItem.md)[]

Defined in: main.ts:223558

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:223555

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:223515

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:223523

language code in a POST array

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:223521

location code in a POST array

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#location_code)

***

### place\_id?

> `optional` **place\_id**: `string`

Defined in: main.ts:223546

unique identifier of a business location assigned by Google
learn more about the identifier in this help center article

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`place_id`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#place_id)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:223540

rating of the corresponding local establishment
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`rating`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:223552

the total number of reviews

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`reviews_count`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#reviews_count)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:223519

search engine domain in a POST array

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#se_domain)

***

### sub\_title?

> `optional` **sub\_title**: `string`

Defined in: main.ts:223537

subtitle of the ‘reviews’ element in SERP
additional information (e.g., address) on the ‘reviews’ element for which the reviews are collected

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`sub_title`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#sub_title)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:223534

title of the ‘reviews’ element in SERP
the name of the local establishment for which the reviews are collected

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`title`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:223517

type of element

#### Implementation of

[`IBusinessDataGoogleExtendedReviewsTaskGetResultInfo`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md).[`type`](../interfaces/IBusinessDataGoogleExtendedReviewsTaskGetResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:223571

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:223607

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleExtendedReviewsTaskGetResultInfo`](BusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)

Defined in: main.ts:223600

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleExtendedReviewsTaskGetResultInfo`](BusinessDataGoogleExtendedReviewsTaskGetResultInfo.md)
