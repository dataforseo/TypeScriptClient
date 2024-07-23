**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonReviewsTaskGetAdvancedResultInfo

# Class: MerchantAmazonReviewsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonReviewsTaskGetAdvancedResultInfo(data)

> **new MerchantAmazonReviewsTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:187853

## Properties

### asin?

> **`optional`** **asin**: `string`

asin received in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`asin`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#asin)

#### Source

main.ts:187809

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:187820

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:187825

***

### image?

> **`optional`** **image**: [`ImagesElement`](ImagesElement.md)

product image data

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`image`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#image)

#### Source

main.ts:187833

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:187843

***

### items?

> **`optional`** **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:187849

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:187846

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:187817

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:187815

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

rating of the product on Amazon
popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`rating`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#rating)

#### Source

main.ts:187836

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`reviews_count`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Source

main.ts:187838

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:187813

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:187828

***

### title?

> **`optional`** **title**: `string`

title of the product on Amazon
the title of the product for which the reviews are collected

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#title)

#### Source

main.ts:187831

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:187811

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:187862

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:187901

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:187894
