**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelevantPagesLiveResultInfo

# Class: DataforseoLabsGoogleRelevantPagesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelevantPagesLiveResultInfo(data)

> **new DataforseoLabsGoogleRelevantPagesLiveResultInfo**(`data`?): [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Source

main.ts:93895

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items)

#### Source

main.ts:93891

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items_count)

#### Source

main.ts:93889

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#language_code)

#### Source

main.ts:93885

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#location_code)

#### Source

main.ts:93882

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#se_type)

#### Source

main.ts:93877

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#target)

#### Source

main.ts:93879

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#total_count)

#### Source

main.ts:93887

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:93904

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:93931

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Source

main.ts:93924
