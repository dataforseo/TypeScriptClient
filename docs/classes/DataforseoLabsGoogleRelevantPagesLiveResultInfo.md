[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelevantPagesLiveResultInfo

# Class: DataforseoLabsGoogleRelevantPagesLiveResultInfo

Defined in: main.ts:104882

## Implements

- [`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelevantPagesLiveResultInfo()

> **new DataforseoLabsGoogleRelevantPagesLiveResultInfo**(`data`?): [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

Defined in: main.ts:104902

#### Parameters

##### data?

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`DataforseoLabsRelevantPagesLiveItem`](DataforseoLabsRelevantPagesLiveItem.md)[]

Defined in: main.ts:104898

relevant pages and related data

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:104896

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:104892

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:104889

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:104884

search engine type

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#se_type)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:104886

target domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:104894

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveResultInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:104911

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:104938

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)

Defined in: main.ts:104931

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleRelevantPagesLiveResultInfo`](DataforseoLabsGoogleRelevantPagesLiveResultInfo.md)
