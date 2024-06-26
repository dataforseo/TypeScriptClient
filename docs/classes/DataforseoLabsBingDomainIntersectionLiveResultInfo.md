**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingDomainIntersectionLiveResultInfo

# Class: DataforseoLabsBingDomainIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainIntersectionLiveResultInfo(data)

> **new DataforseoLabsBingDomainIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Source

main.ts:108488

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsBingDomainIntersectionLiveItem`](DataforseoLabsBingDomainIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items)

#### Source

main.ts:108484

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#items_count)

#### Source

main.ts:108482

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#language_code)

#### Source

main.ts:108478

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#location_code)

#### Source

main.ts:108476

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#se_type)

#### Source

main.ts:108470

***

### target1?

> **`optional`** **target1**: `string`

target specified in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`target1`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target1)

#### Source

main.ts:108472

***

### target2?

> **`optional`** **target2**: `string`

target specified in a POST array

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`target2`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#target2)

#### Source

main.ts:108474

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResultInfo.md#total_count)

#### Source

main.ts:108480

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:108497

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:108525

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResultInfo`](DataforseoLabsBingDomainIntersectionLiveResultInfo.md)

#### Source

main.ts:108518
