**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingRelevantPagesLiveResultInfo

# Class: DataforseoLabsBingRelevantPagesLiveResultInfo

## Implements

- [`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRelevantPagesLiveResultInfo(data)

> **new DataforseoLabsBingRelevantPagesLiveResultInfo**(`data`?): [`DataforseoLabsBingRelevantPagesLiveResultInfo`](DataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Returns

[`DataforseoLabsBingRelevantPagesLiveResultInfo`](DataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Source

main.ts:111402

## Properties

### items?

> **`optional`** **items**: [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#items)

#### Source

main.ts:111398

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#items_count)

#### Source

main.ts:111396

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#language_code)

#### Source

main.ts:111392

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#location_code)

#### Source

main.ts:111389

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#se_type)

#### Source

main.ts:111384

***

### target?

> **`optional`** **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#target)

#### Source

main.ts:111386

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsBingRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsBingRelevantPagesLiveResultInfo.md#total_count)

#### Source

main.ts:111394

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:111411

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:111438

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingRelevantPagesLiveResultInfo`](DataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRelevantPagesLiveResultInfo`](DataforseoLabsBingRelevantPagesLiveResultInfo.md)

#### Source

main.ts:111431
