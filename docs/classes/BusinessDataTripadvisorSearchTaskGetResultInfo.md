**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataTripadvisorSearchTaskGetResultInfo

# Class: BusinessDataTripadvisorSearchTaskGetResultInfo

## Implements

- [`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataTripadvisorSearchTaskGetResultInfo(data)

> **new BusinessDataTripadvisorSearchTaskGetResultInfo**(`data`?): [`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Returns

[`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Source

main.ts:206965

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to Tripadvisor results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`check_url`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#check_url)

#### Source

main.ts:206945

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`datetime`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#datetime)

#### Source

main.ts:206950

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

item types encountered in the result
possible item types: tripadvisor_search_organic

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`item_types`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#item_types)

#### Source

main.ts:206953

***

### items?

> **`optional`** **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

Tripadvisor search listing results
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`items`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#items)

#### Source

main.ts:206961

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`items_count`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#items_count)

#### Source

main.ts:206958

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
this field will contain the alias parameter if it was specified in a POST array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`keyword`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#keyword)

#### Source

main.ts:206936

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`language_code`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#language_code)

#### Source

main.ts:206942

***

### location\_code?

> **`optional`** **location\_code**: `string`

location code in a POST array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`location_code`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#location_code)

#### Source

main.ts:206940

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`se_domain`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#se_domain)

#### Source

main.ts:206938

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

the total number of results

#### Implementation of

[`IBusinessDataTripadvisorSearchTaskGetResultInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md).[`se_results_count`](../interfaces/IBusinessDataTripadvisorSearchTaskGetResultInfo.md#se_results_count)

#### Source

main.ts:206955

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:206974

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:207008

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataTripadvisorSearchTaskGetResultInfo`](BusinessDataTripadvisorSearchTaskGetResultInfo.md)

#### Source

main.ts:207001
