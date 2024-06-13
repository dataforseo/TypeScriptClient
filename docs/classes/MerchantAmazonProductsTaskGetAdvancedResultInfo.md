**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantAmazonProductsTaskGetAdvancedResultInfo

# Class: MerchantAmazonProductsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantAmazonProductsTaskGetAdvancedResultInfo(data)

> **new MerchantAmazonProductsTaskGetAdvancedResultInfo**(`data`?): [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:179537

## Properties

### categories?

> **`optional`** **categories**: `string`[]

amazon product departments and subcategories

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`categories`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#categories)

#### Source

main.ts:179529

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:179512

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:179517

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in Amazon SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:179525

***

### items?

> **`optional`** **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

Amazon product items within the editorial_recommendations element

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:179533

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:179531

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:179501

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:179509

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:179507

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:179505

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

search engine results count

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:179527

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:179520

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantAmazonProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:179503

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:179546

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:179587

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:179580
