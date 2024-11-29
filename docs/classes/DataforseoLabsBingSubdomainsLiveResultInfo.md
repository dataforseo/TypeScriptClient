[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingSubdomainsLiveResultInfo

# Class: DataforseoLabsBingSubdomainsLiveResultInfo

## Implements

- [`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingSubdomainsLiveResultInfo()

> **new DataforseoLabsBingSubdomainsLiveResultInfo**(`data`?): [`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Defined in

main.ts:120584

## Properties

### items?

> `optional` **items**: [`DataforseoLabsSubdomainsLiveItem`](DataforseoLabsSubdomainsLiveItem.md)[]

contains subdomains and related data

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#items)

#### Defined in

main.ts:120580

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#items_count)

#### Defined in

main.ts:120578

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#language_code)

#### Defined in

main.ts:120574

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#location_code)

#### Defined in

main.ts:120572

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#se_type)

#### Defined in

main.ts:120568

***

### target?

> `optional` **target**: `string`

domain in a POST array

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#target)

#### Defined in

main.ts:120570

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingSubdomainsLiveResultInfo`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingSubdomainsLiveResultInfo.md#total_count)

#### Defined in

main.ts:120576

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:120593

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:120620

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingSubdomainsLiveResultInfo`](DataforseoLabsBingSubdomainsLiveResultInfo.md)

#### Defined in

main.ts:120613
