[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleCategoriesForDomainLiveResultInfo

# Class: DataforseoLabsGoogleCategoriesForDomainLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleCategoriesForDomainLiveResultInfo()

> **new DataforseoLabsGoogleCategoriesForDomainLiveResultInfo**(`data`?): [`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Defined in

main.ts:87885

## Properties

### items?

> `optional` **items**: [`DataforseoLabsGoogleCategoriesForDomainLiveItem`](DataforseoLabsGoogleCategoriesForDomainLiveItem.md)[]

contains relevant categories and related ranking data

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#items)

#### Defined in

main.ts:87881

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#items_count)

#### Defined in

main.ts:87879

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#language_code)

#### Defined in

main.ts:87875

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#location_code)

#### Defined in

main.ts:87873

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#se_type)

#### Defined in

main.ts:87869

***

### target?

> `optional` **target**: `string`

target domain or subdomain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#target)

#### Defined in

main.ts:87871

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md#total_count)

#### Defined in

main.ts:87877

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:87894

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:87921

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleCategoriesForDomainLiveResultInfo`](DataforseoLabsGoogleCategoriesForDomainLiveResultInfo.md)

#### Defined in

main.ts:87914
