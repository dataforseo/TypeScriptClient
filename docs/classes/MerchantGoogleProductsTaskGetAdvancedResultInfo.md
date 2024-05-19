**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantGoogleProductsTaskGetAdvancedResultInfo

# Class: MerchantGoogleProductsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new MerchantGoogleProductsTaskGetAdvancedResultInfo(data)

> **new MerchantGoogleProductsTaskGetAdvancedResultInfo**(`data`?): [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:173197

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:173174

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:173179

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
google_shopping_sponsored_carousel, google_shopping_paid, google_shopping_serp

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:173187

***

### items?

> **`optional`** **items**: [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)[]

additional items present in the element
contains a list of related keywords;
if there are none, equals null

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:173193

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:173189

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:173163

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:173171

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:173169

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:173167

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:173182

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IMerchantGoogleProductsTaskGetAdvancedResultInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:173165

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:173206

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:173241

***

### fromJS()

> **`static`** **fromJS**(`data`): [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:173234
