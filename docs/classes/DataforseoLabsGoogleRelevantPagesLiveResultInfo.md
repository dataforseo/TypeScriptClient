[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsGoogleRelevantPagesLiveResultInfo

# Class: DataforseoLabsGoogleRelevantPagesLiveResultInfo

## Implements

- [`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelevantPagesLiveResultInfo()

> **new DataforseoLabsGoogleRelevantPagesLiveResultInfo**(`data`?): [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Defined in

main.ts:96379

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)[]

relevant pages and related data

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items)

#### Defined in

main.ts:96375

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items_count)

#### Defined in

main.ts:96373

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#language_code)

#### Defined in

main.ts:96369

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#location_code)

#### Defined in

main.ts:96366

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#se_type)

#### Defined in

main.ts:96361

***

### target?

> `optional` **target**: `string`

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#target)

#### Defined in

main.ts:96363

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#total_count)

#### Defined in

main.ts:96371

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:96388

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:96415

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Defined in

main.ts:96408
