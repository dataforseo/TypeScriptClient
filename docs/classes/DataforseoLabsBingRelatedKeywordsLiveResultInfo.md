**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRelatedKeywordsLiveResultInfo(data)

> **new DataforseoLabsBingRelatedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Source

main.ts:111898

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsBingRelatedKeywordsLiveItem`](DataforseoLabsBingRelatedKeywordsLiveItem.md)[]

contains keywords and related data

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items)

#### Source

main.ts:111894

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#items_count)

#### Source

main.ts:111892

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#language_code)

#### Source

main.ts:111888

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#location_code)

#### Source

main.ts:111886

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#se_type)

#### Source

main.ts:111879

***

### seed\_keyword?

> **`optional`** **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword)

#### Source

main.ts:111881

***

### seed\_keyword\_data?

> **`optional`** **seed\_keyword\_data**: [`KeywordData`](KeywordData.md)

keyword data for the seed keyword
fields in the array are identical to that of keyword_data

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

#### Source

main.ts:111884

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResultInfo.md#total_count)

#### Source

main.ts:111890

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:111907

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:111935

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResultInfo`](DataforseoLabsBingRelatedKeywordsLiveResultInfo.md)

#### Source

main.ts:111928
