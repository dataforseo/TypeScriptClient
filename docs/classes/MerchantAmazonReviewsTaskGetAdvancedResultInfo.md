[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskGetAdvancedResultInfo

# Class: MerchantAmazonReviewsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTaskGetAdvancedResultInfo()

> **new MerchantAmazonReviewsTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:197344

## Properties

### asin?

> `optional` **asin**: `string`

asin received in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`asin`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#asin)

#### Defined in

main.ts:197300

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:197311

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:197316

***

### image?

> `optional` **image**: [`ImagesElement`](ImagesElement.md)

product image data

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`image`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#image)

#### Defined in

main.ts:197324

***

### item\_types?

> `optional` **item\_types**: `string`[]

type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:197334

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:197340

***

### items\_count?

> `optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:197337

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:197308

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:197306

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

rating of the product on Amazon
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#rating)

#### Defined in

main.ts:197327

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Defined in

main.ts:197329

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:197304

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:197319

***

### title?

> `optional` **title**: `string`

title of the product on Amazon
the title of the product for which the reviews are collected

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#title)

#### Defined in

main.ts:197322

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:197302

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:197353

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:197392

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:197385
