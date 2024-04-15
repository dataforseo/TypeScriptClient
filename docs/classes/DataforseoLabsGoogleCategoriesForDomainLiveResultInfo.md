**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleCategoriesForDomainLiveResultInfo

# Class: DataforseoLabsGoogleCategoriesForDomainLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForDomainLiveResultInfo(data)

> **new DataforseoLabsGoogleCategoriesForDomainLiveResultInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Source

main.ts:85897

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)[]

contains relevant categories and related ranking data

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#items)

#### Source

main.ts:85893

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#items_count)

#### Source

main.ts:85891

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#language_code)

#### Source

main.ts:85887

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#location_code)

#### Source

main.ts:85885

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#se_type)

#### Source

main.ts:85881

***

### target?

> **`optional`** **target**: `string`

target domain or subdomain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#target)

#### Source

main.ts:85883

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#total_count)

#### Source

main.ts:85889

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:85906

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:85933

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Source

main.ts:85926
