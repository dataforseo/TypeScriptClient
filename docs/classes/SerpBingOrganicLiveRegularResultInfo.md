**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveRegularResultInfo

# Class: SerpBingOrganicLiveRegularResultInfo

## Implements

- [`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveRegularResultInfo(data)

> **new SerpBingOrganicLiveRegularResultInfo**(`data`?): [`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md)

#### Returns

[`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Source

main.ts:58759

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#check_url)

#### Source

main.ts:58736

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#datetime)

#### Source

main.ts:58741

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#item_types)

#### Source

main.ts:58748

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items inside the element
array of 8 search queries related to the keyword

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#items)

#### Source

main.ts:58755

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#items_count)

#### Source

main.ts:58752

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#keyword)

#### Source

main.ts:58725

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#language_code)

#### Source

main.ts:58733

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#location_code)

#### Source

main.ts:58731

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#se_domain)

#### Source

main.ts:58729

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#se_results_count)

#### Source

main.ts:58750

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#spell)

#### Source

main.ts:58744

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#type)

#### Source

main.ts:58727

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:58768

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:58804

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

#### Source

main.ts:58797
