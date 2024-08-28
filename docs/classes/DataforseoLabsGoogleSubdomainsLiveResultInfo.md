[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGoogleSubdomainsLiveResultInfo

# Class: DataforseoLabsGoogleSubdomainsLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSubdomainsLiveResultInfo()

> **new DataforseoLabsGoogleSubdomainsLiveResultInfo**(`data`?): [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Defined in

main.ts:95779

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)[]

contains subdomains and related data

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items)

#### Defined in

main.ts:95775

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#items_count)

#### Defined in

main.ts:95773

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#language_code)

#### Defined in

main.ts:95769

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#location_code)

#### Defined in

main.ts:95767

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#se_type)

#### Defined in

main.ts:95763

***

### target?

> `optional` **target**: `string`

domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#target)

#### Defined in

main.ts:95765

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleSubdomainsLiveResultInfo.md#total_count)

#### Defined in

main.ts:95771

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:95788

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:95815

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSubdomainsLiveResultInfo`](DataforseoLabsGoogleSubdomainsLiveResultInfo.md)

#### Defined in

main.ts:95808
