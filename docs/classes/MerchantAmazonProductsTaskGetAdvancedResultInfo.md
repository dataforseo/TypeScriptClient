[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTaskGetAdvancedResultInfo

# Class: MerchantAmazonProductsTaskGetAdvancedResultInfo

Defined in: main.ts:192964

## Implements

- [`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskGetAdvancedResultInfo()

> **new MerchantAmazonProductsTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:193003

#### Parameters

##### data?

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:192995

amazon product departments and subcategories

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`categories`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#categories)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:192978

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:192983

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:192991

types of search results found in Amazon SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Defined in: main.ts:192999

Amazon product items within the editorial_recommendations element

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:192997

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:192967

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:192975

language code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:192973

location code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:192971

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:192993

search engine results count

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:192986

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:192969

type of element

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:193012

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:193053

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:193046

#### Parameters

##### data

`any`

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)
