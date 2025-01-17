[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSearchIntentLiveItem

# Class: DataforseoLabsGoogleSearchIntentLiveItem

Defined in: main.ts:96628

## Implements

- [`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSearchIntentLiveItem()

> **new DataforseoLabsGoogleSearchIntentLiveItem**(`data`?): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

Defined in: main.ts:96638

#### Parameters

##### data?

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md)

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:96630

target keyword in a POST array

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword)

***

### keyword\_intent?

> `optional` **keyword\_intent**: [`KeywordIntentInfo`](KeywordIntentInfo.md)

Defined in: main.ts:96632

search intent data relevant for the specified keyword

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`keyword_intent`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword_intent)

***

### secondary\_keyword\_intents?

> `optional` **secondary\_keyword\_intents**: [`KeywordIntentInfo`](KeywordIntentInfo.md)[]

Defined in: main.ts:96634

contains objects with other possible search intents for the specified keyword

#### Implementation of

[`IDataforseoLabsGoogleSearchIntentLiveItem`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md).[`secondary_keyword_intents`](../interfaces/IDataforseoLabsGoogleSearchIntentLiveItem.md#secondary_keyword_intents)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:96647

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:96670

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)

Defined in: main.ts:96663

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleSearchIntentLiveItem`](DataforseoLabsGoogleSearchIntentLiveItem.md)
