**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ItemsRankedSerpElement

# Class: ItemsRankedSerpElement

## Implements

- [`IItemsRankedSerpElement`](../interfaces/IItemsRankedSerpElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ItemsRankedSerpElement(data)

> **new ItemsRankedSerpElement**(`data`?): [`ItemsRankedSerpElement`](ItemsRankedSerpElement.md)

#### Parameters

• **data?**: [`IItemsRankedSerpElement`](../interfaces/IItemsRankedSerpElement.md)

#### Returns

[`ItemsRankedSerpElement`](ItemsRankedSerpElement.md)

#### Source

main.ts:116780

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IItemsRankedSerpElement`](../interfaces/IItemsRankedSerpElement.md).[`check_url`](../interfaces/IItemsRankedSerpElement.md#check_url)

#### Source

main.ts:116763

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IItemsRankedSerpElement`](../interfaces/IItemsRankedSerpElement.md).[`last_updated_time`](../interfaces/IItemsRankedSerpElement.md#last_updated_time)

#### Source

main.ts:116770

***

### previous\_updated\_time?

> **`optional`** **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

#### Implementation of

[`IItemsRankedSerpElement`](../interfaces/IItemsRankedSerpElement.md).[`previous_updated_time`](../interfaces/IItemsRankedSerpElement.md#previous_updated_time)

#### Source

main.ts:116776

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `string`

number of search results for the returned keyword

#### Implementation of

[`IItemsRankedSerpElement`](../interfaces/IItemsRankedSerpElement.md).[`se_results_count`](../interfaces/IItemsRankedSerpElement.md#se_results_count)

#### Source

main.ts:116765

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IItemsRankedSerpElement`](../interfaces/IItemsRankedSerpElement.md).[`se_type`](../interfaces/IItemsRankedSerpElement.md#se_type)

#### Source

main.ts:116757

***

### serp\_item?

> **`optional`** **serp\_item**: [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Implementation of

[`IItemsRankedSerpElement`](../interfaces/IItemsRankedSerpElement.md).[`serp_item`](../interfaces/IItemsRankedSerpElement.md#serp_item)

#### Source

main.ts:116760

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:116789

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:116811

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ItemsRankedSerpElement`](ItemsRankedSerpElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`ItemsRankedSerpElement`](ItemsRankedSerpElement.md)

#### Source

main.ts:116804