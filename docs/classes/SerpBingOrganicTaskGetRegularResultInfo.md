**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskGetRegularResultInfo

# Class: SerpBingOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskGetRegularResultInfo(data)

> **new SerpBingOrganicTaskGetRegularResultInfo**(`data`?): [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Source

main.ts:57708

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#check_url)

#### Source

main.ts:57685

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#datetime)

#### Source

main.ts:57690

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#item_types)

#### Source

main.ts:57697

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items inside the element
array of 8 search queries related to the keyword

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#items)

#### Source

main.ts:57704

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#items_count)

#### Source

main.ts:57701

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#keyword)

#### Source

main.ts:57674

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#language_code)

#### Source

main.ts:57682

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#location_code)

#### Source

main.ts:57680

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#se_domain)

#### Source

main.ts:57678

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Source

main.ts:57699

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#spell)

#### Source

main.ts:57693

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#type)

#### Source

main.ts:57676

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:57717

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:57753

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

#### Source

main.ts:57746
