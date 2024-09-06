[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo()

> **new DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Defined in

main.ts:88826

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items)

#### Defined in

main.ts:88822

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items_count)

#### Defined in

main.ts:88814

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#language_code)

#### Defined in

main.ts:88810

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#location_code)

#### Defined in

main.ts:88808

***

### offset?

> `optional` **offset**: `number`

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset)

#### Defined in

main.ts:88816

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset_token)

#### Defined in

main.ts:88820

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#se_type)

#### Defined in

main.ts:88804

***

### seed\_categories?

> `optional` **seed\_categories**: `number`[]

categories in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`seed_categories`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#seed_categories)

#### Defined in

main.ts:88806

***

### total\_count?

> `optional` **total\_count**: `number`

the total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#total_count)

#### Defined in

main.ts:88812

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:88835

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:88868

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Defined in

main.ts:88861
