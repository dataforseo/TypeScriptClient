[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleImagesTaskGetAdvancedResultInfo

# Class: SerpGoogleImagesTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleImagesTaskGetAdvancedResultInfo()

> **new SerpGoogleImagesTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:49442

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:49419

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:49424

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:49432

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

contains keywords and images related to the specified search term

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:49438

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:49436

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:49408

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:49416

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:49414

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:49412

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:49434

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:49427

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:49410

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:49451

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:49487

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:49480
