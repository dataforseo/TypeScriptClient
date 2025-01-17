[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskGetAdvancedResultInfo

# Class: MerchantAmazonReviewsTaskGetAdvancedResultInfo

Defined in: main.ts:197366

## Implements

- [`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTaskGetAdvancedResultInfo()

> **new MerchantAmazonReviewsTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:197412

#### Parameters

##### data?

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

## Properties

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:197368

asin received in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`asin`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#asin)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:197379

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:197384

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#datetime)

***

### image?

> `optional` **image**: [`ImagesElement`](ImagesElement.md)

Defined in: main.ts:197392

product image data

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`image`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#image)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:197402

type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:197408

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:197405

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:197376

language code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:197374

location code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#location_code)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:197395

rating of the product on Amazon
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#rating)

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

Defined in: main.ts:197397

the total number of reviews

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#reviews_count)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:197372

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#se_domain)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:197387

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#spell)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:197390

title of the product on Amazon
the title of the product for which the reviews are collected

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:197370

type of element

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:197421

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:197460

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:197453

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)
