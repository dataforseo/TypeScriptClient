**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainIntersectionLiveResultInfo

# Class: DataforseoLabsGoogleDomainIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleDomainIntersectionLiveResultInfo(data)

> **new DataforseoLabsGoogleDomainIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Source

main.ts:94885

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsGoogleDomainIntersectionLiveItem`](DataforseoLabsGoogleDomainIntersectionLiveItem.md)[]

contains keywords, relevant SERP elements and related data

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#items)

#### Source

main.ts:94881

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#items_count)

#### Source

main.ts:94879

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#language_code)

#### Source

main.ts:94875

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#location_code)

#### Source

main.ts:94873

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#se_type)

#### Source

main.ts:94867

***

### target1?

> **`optional`** **target1**: `string`

the first target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`target1`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#target1)

#### Source

main.ts:94869

***

### target2?

> **`optional`** **target2**: `string`

the second target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`target2`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#target2)

#### Source

main.ts:94871

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleDomainIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResultInfo.md#total_count)

#### Source

main.ts:94877

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:94894

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:94922

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResultInfo`](DataforseoLabsGoogleDomainIntersectionLiveResultInfo.md)

#### Source

main.ts:94915
