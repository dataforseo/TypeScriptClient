[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo

Defined in: main.ts:98616

## Implements

- [`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo()

> **new DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

Defined in: main.ts:98640

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`KeywordDataInfo`](KeywordDataInfo.md)[]

Defined in: main.ts:98636

contains keyword ideas and related data

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:98628

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:98624

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:98622

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#location_code)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:98630

current offset value

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:98634

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#offset_token)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:98618

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#se_type)

***

### seed\_categories?

> `optional` **seed\_categories**: `number`[]

Defined in: main.ts:98620

categories in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`seed_categories`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#seed_categories)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:98626

the total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:98649

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:98682

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)

Defined in: main.ts:98675

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)
